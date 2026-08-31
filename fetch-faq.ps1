$base = 'https://admin.kotharigroupindia.com'
Write-Host "=== Check /wp-json root for acf namespace ===" -ForegroundColor Cyan
try { $r = Invoke-RestMethod -Uri "$base/wp-json" -Method Get; Write-Host "namespaces: $($r.namespaces -join ', ')"; Write-Host "routes containing acf:"; $r.routes.Keys | Where-Object { $_ -match 'acf' } | ForEach-Object { Write-Host $_ } } catch { Write-Host $_ }

Write-Host "=== Fetch wp/v2/product/18927 (UDS) ===" -ForegroundColor Cyan
try {
  $r = Invoke-RestMethod -Uri "$base/wp-json/wp/v2/product/18927" -Method Get
  Write-Host "acf type: $($r.acf.GetType().Name) value: $($r.acf | ConvertTo-Json -Compress)"
  Write-Host "meta: $($r.meta | ConvertTo-Json -Compress)"
  Write-Host "acf_format attempt ==="
  $r2 = Invoke-RestMethod -Uri "$base/wp-json/wp/v2/product/18927?acf_format=standard" -Method Get
  Write-Host "acf2: $($r2.acf | ConvertTo-Json -Compress)"
} catch { Write-Host "ERR $($_.Exception.Message)"; if ($_.ErrorDetails.Message){ Write-Host $_.ErrorDetails.Message.Substring(0,3000)} }

Write-Host "=== Try acf v3 endpoints ===" -ForegroundColor Cyan
foreach ($u in @("/wp-json/acf/v3/product/18927","/wp-json/acf/v3/posts/18927","/wp-json/acf/v3/options")) {
  try { $r = Invoke-RestMethod -Uri "$base$u" -Method Get; Write-Host "$u OK: $($r | ConvertTo-Json -Depth 3 -Compress).Substring(0,1000)" } catch { Write-Host "$u ERR $($_.Exception.Message)" }
}

Write-Host "=== Fetch wc/store for UDS extended with _embed ===" -ForegroundColor Cyan
try {
  $r = Invoke-RestMethod -Uri "$base/wp-json/wc/store/v1/products?search=upvc-underground-drainage&per_page=1" -Method Get
  $r[0] | ConvertTo-Json -Depth 6 | Write-Host
} catch { Write-Host $_ }

Write-Host "=== Direct ACF via _fields=acf ===" -ForegroundColor Cyan
try {
  $r = Invoke-RestMethod -Uri "$base/wp-json/wp/v2/product/18927?_fields=acf,title" -Method Get
  Write-Host ($r | ConvertTo-Json -Depth 4)
} catch { Write-Host $_ }
