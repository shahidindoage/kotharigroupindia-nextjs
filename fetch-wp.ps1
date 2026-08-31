$base = 'https://admin.kotharigroupindia.com'
function Fetch($path) {
  $url = $base + $path
  Write-Host "=== FETCH $url ===" -ForegroundColor Cyan
  try {
    $r = Invoke-RestMethod -Uri $url -Method Get -Headers @{'User-Agent'='Mozilla/5.0'} -TimeoutSec 20
    $json = $r | ConvertTo-Json -Depth 5
    Write-Host $json.Substring(0, [Math]::Min(6000, $json.Length))
    Write-Host ""
    if ($r -is [Array]) {
      Write-Host "Array length $($r.Count)"
      if ($r.Count -gt 0) {
        $r[0].PSObject.Properties.Name | ForEach-Object { Write-Host $_ }
      }
    } else {
      Write-Host "Keys: $($r.PSObject.Properties.Name -join ', ')"
    }
  } catch {
    Write-Host "ERROR $($_.Exception.Message)" -ForegroundColor Red
    if ($_.ErrorDetails.Message) { Write-Host $_.ErrorDetails.Message.Substring(0,4000) }
    try {
      $resp = $_.Exception.Response
      if ($resp) {
        $sr = New-Object System.IO.StreamReader($resp.GetResponseStream())
        Write-Host $sr.ReadToEnd().Substring(0,4000)
      }
    } catch {}
  }
  Write-Host "----------------------------------------" -ForegroundColor DarkGray
}

Fetch "/wp-json"
Fetch "/wp-json/wp/v2/types"
Fetch "/wp-json/wp/v2/posts?per_page=1"
Fetch "/wp-json/acf/v3/options"
Fetch "/wp-json/wp/v2/categories?per_page=2"
foreach ($pt in @("product","products","kothari_product","wp_product","product_cat")) {
  Fetch "/wp-json/wp/v2/$pt`?per_page=1"
}
# try WooCommerce products
Fetch "/wp-json/wc/store/v1/products?per_page=1"
Fetch "/wp-json/wc/v3/products?per_page=1"
