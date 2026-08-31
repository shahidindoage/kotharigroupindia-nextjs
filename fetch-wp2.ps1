$base = 'https://admin.kotharigroupindia.com'
function ShowJson($obj, $depth=3) {
  $json = $obj | ConvertTo-Json -Depth $depth
  Write-Host $json.Substring(0, [Math]::Min(8000, $json.Length))
  Write-Host ""
}

Write-Host "=== FETCH product list wp/v2/product ?per_page=3 ===" -ForegroundColor Cyan
try {
  $r = Invoke-RestMethod -Uri "$base/wp-json/wp/v2/product?per_page=5" -Method Get -Headers @{'User-Agent'='Mozilla/5.0'} -TimeoutSec 20
  Write-Host "Count $($r.Count)"
  foreach ($p in $r) {
    Write-Host "--- PRODUCT ---" -ForegroundColor Yellow
    Write-Host "id=$($p.id) slug=$($p.slug) title=$($p.title.rendered)"
    Write-Host "product_cat ids: $($p.product_cat -join ', ')"
    Write-Host "acf: $($p.acf | ConvertTo-Json -Compress)"
    Write-Host "meta: $($p.meta | ConvertTo-Json -Compress)"
    Write-Host "featured_media=$($p.featured_media)"
    # fetch acf via acf endpoint if exists
  }
} catch { Write-Host "ERR $($_.Exception.Message)" -ForegroundColor Red ; if ($_.ErrorDetails.Message){ Write-Host $_.ErrorDetails.Message.Substring(0,4000)} }

Write-Host "=== FETCH wc/store/v1/products ?per_page=5 ===" -ForegroundColor Cyan
try {
  $r = Invoke-RestMethod -Uri "$base/wp-json/wc/store/v1/products?per_page=5" -Method Get -Headers @{'User-Agent'='Mozilla/5.0'} -TimeoutSec 20
  Write-Host "Count $($r.Count)"
  foreach ($p in $r) {
    Write-Host "--- WOO PRODUCT ---"
    Write-Host "id=$($p.id) name=$($p.name) slug=$($p.slug) categories=$($p.categories[0].name) slug=$($p.categories[0].slug)"
    Write-Host "attributes: $($p.attributes | ConvertTo-Json -Compress)"
    Write-Host "images: $($p.images[0].src)"
    Write-Host "short_desc len $($p.short_description.Length)"
    Write-Host "extensions: $($p.extensions | ConvertTo-Json -Depth 3 -Compress)"
  }
} catch { Write-Host "ERR $($_.Exception.Message)" -ForegroundColor Red }

Write-Host "=== FETCH single product detail via wc/store by id 19184 extended ===" -ForegroundColor Cyan
try {
  $r = Invoke-RestMethod -Uri "$base/wp-json/wp/v2/product/19184?acf_format=standard" -Method Get -Headers @{'User-Agent'='Mozilla/5.0'} -TimeoutSec 20
  ShowJson $r 4
} catch { Write-Host "ERR $($_.Exception.Message)" -ForegroundColor Red ; if ($_.ErrorDetails.Message){ Write-Host $_.ErrorDetails.Message.Substring(0,6000)} }

Write-Host "=== TRY acf/v3/product/19184 ===" -ForegroundColor Cyan
try {
  $r = Invoke-RestMethod -Uri "$base/wp-json/acf/v3/product/19184" -Method Get -Headers @{'User-Agent'='Mozilla/5.0'} -TimeoutSec 20
  ShowJson $r 5
} catch { Write-Host "ERR $($_.Exception.Message)" -ForegroundColor Red ; if ($_.ErrorDetails.Message){ Write-Host $_.ErrorDetails.Message.Substring(0,6000)} }

Write-Host "=== FETCH product_cat list ===" -ForegroundColor Cyan
try {
  $r = Invoke-RestMethod -Uri "$base/wp-json/wp/v2/product_cat?per_page=20" -Method Get -Headers @{'User-Agent'='Mozilla/5.0'} -TimeoutSec 20
  Write-Host "Cats $($r.Count)"
  foreach ($c in $r) { Write-Host "id=$($c.id) slug=$($c.slug) name=$($c.name) parent=$($c.parent) count=$($c.count)" }
} catch { Write-Host "ERR $($_.Exception.Message)" -ForegroundColor Red }

Write-Host "=== TRY wc/store products with search uds ===" -ForegroundColor Cyan
try {
  $r = Invoke-RestMethod -Uri "$base/wp-json/wc/store/v1/products?search=UDS&per_page=3" -Method Get -Headers @{'User-Agent'='Mozilla/5.0'} -TimeoutSec 20
  Write-Host "Count $($r.Count)"
  foreach ($p in $r) { Write-Host "name=$($p.name) slug=$($p.slug) id=$($p.id)"; ShowJson $p 4 }
} catch { Write-Host "ERR $($_.Exception.Message)" -ForegroundColor Red }

