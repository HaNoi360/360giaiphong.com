<?PHP
function ResetNow() {
	$Bootstrap5='
	<style>
	'.file_get_contents("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css").'
	</style>
	<script>
	'.file_get_contents("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js").'
	</script>
	<script>
	'.file_get_contents("https://code.jquery.com/jquery-3.6.0.min.js").'
	</script>
	';
	$MyData='
	<style>
	'.file_get_contents("css.css").'
	</style>
	<script>
	'.file_get_contents("Data.js").'
	</script>
	<script>
	'.file_get_contents("js.js").'
	</script>
	';
	$Result=file_get_contents("Theme.html");
	$Result=str_replace('%Bootstrap5%',$Bootstrap5,$Result);
	$Result=str_replace('%MyData%',$MyData,$Result);
	file_put_contents("DONE.html",$Result);
}

if (isset($_REQUEST["ResetNow"])) {ResetNow();}
else {if (!file_exists("DONE.html")) {ResetNow();}}
echo file_get_contents("DONE.html");
?>