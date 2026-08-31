$base = 'https://admin.kotharigroupindia.com'
Write-Host "=== FETCH wc/store products per_page 100 ===" -ForegroundColor Cyan
try {
  $r = Invoke-RestMethod -Uri "$base/wp-json/wc/store/v1/products?per_page=100" -Method Get -Headers @{'User-Agent'='Mozilla/5.0'} -TimeoutSec 30
  Write-Host "Total returned $($r.Count)"
  $r | ForEach-Object { Write-Host "id=$($_.id) slug=$($_.slug) name=$($_.name) cat=$($_.categories[0].slug) type=$($_.type)" }
  Write-Host "=== Sample full JSON for 2nd product (CPVC search) ==="
  # find cpvc product via search
} catch { Write-Host "ERR $($_.Exception.Message)" -ForegroundColor Red; if ($_.ErrorDetails.Message){ Write-Host $_.ErrorDetails.Message.Substring(0,3000)} }

Write-Host "=== Search CPVC ===" -ForegroundColor Cyan
try {
  $r = Invoke-RestMethod -Uri "$base/wp-json/wc/store/v1/products?search=CPVC&per_page=10" -Method Get -Headers @{'User-Agent'='Mozilla/5.0'} -TimeoutSec 20
  Write-Host "Found $($r.Count)"
  foreach ($p in $r) {
    Write-Host "--- $($p.name) slug=$($p.slug) id=$($p.id) ---"
    Write-Host "short: $($p.short_description.Substring(0, [Math]::Min(300, $p.short_description.Length)) -replace '`r|`n',' ')"
    Write-Host "desc snippet: $($p.description.Substring(0, [Math]::Min(800, $p.description.Length)) -replace '`r|`n',' ')"
    Write-Host "images: $($p.images.Count) first=$($p.images[0].src)"
    Write-Host ""
  }
} catch { Write-Host "ERR $($_.Exception.Message)" -ForegroundColor Red }

Write-Host "=== Fetch wp/v2/product single id 18927 with embed ===" -ForegroundColor Cyan
try {
  $r = Invoke-RestMethod -Uri "$base/wp-json/wp/v2/product/18927?_embed" -Method Get -Headers @{'User-Agent'='Mozilla/5.0'} -TimeoutSec 20
  Write-Host "title $($r.title.rendered)"
  Write-Host "content rendered len $($r.content.rendered.Length) snippet: $($r.content.rendered.Substring(0, [Math]::Min(500, $r.content.rendered.Length)) -replace '`r|`n',' ')"
  Write-Host "yoast? $($r.yoast_head_json.title)"
} catch { Write-Host "ERR $($_.Exception.Message)" -ForegroundColor Red }

Write-Host "=== Fetch product_cat all ===" -ForegroundColor Cyan
try {
  $r = Invoke-RestMethod -Uri "$base/wp-json/wp/v2/product_cat?per_page=100" -Method Get -Headers @{'User-Agent'='Mozilla/5.0'} -TimeoutSec 20
  Write-Host "Cats total $($r.Count)"
  $r | Sort-Object parent | ForEach-Object { Write-Host "id=$($_.id) slug=$($_.slug) name=$($_.name) parent=$($_.parent) count=$($_.count)" }
} catch { Write-Host "ERR $($_.Exception.Message)" -ForegroundColor Red }
