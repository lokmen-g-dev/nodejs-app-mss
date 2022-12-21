const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://192.168.137.129:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'demoapp-project',
	    'sonar.projectKey':'demoapp-project',
	    'sonar.login': 'sqp_5a7e798cbe57587d33ae762b7c81f8e6d459ffc1',
	    'sonar.login': 'admin',
	    'sonar.password': '12345',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
