<?php 

include 'log.php';

/**
* 
*/
class App
{
	$app_imports = "/components/imports";
	$app_uri = "localhost";
	$log;
	
	function __construct($uri)
	{
		$uri = $uri;
		$patchImports = $uri +"/"+ $patchImports;

		include $uri.'/framework/log.php';
		$log = new Log();
	}

	function import($component)
	{
		try
		{
			include  $app_imports.$component;
		} 
		catch (Exception $e)
		{
			echo $log.getMessage('app.import');
		}
		
	}
}



 ?>