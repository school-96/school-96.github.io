<?php
	$file = 'https://school96.000webhostapp.com/assets/json/events.json';
	$json = file_get_contents($file);
	echo $json;