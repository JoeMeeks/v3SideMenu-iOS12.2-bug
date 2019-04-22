# MeltingPoint Mobile
Cross-Platform Multi-Tenant White-Label Application Development Experience


## Prerequisites
- [NodeJS 8.11.1](https://nodejs.org/dist/v8.11.1/) - Node v8 required(https://stackoverflow.com/questions/7718313/how-to-change-to-an-older-version-of-node-js)
- npm 6.0.1: `npm install -g npm@6.0.1`
- ionic CLI: `npm install -g ionic@latest`
- Visual Studio 2017
  - add "C:\Program Files\nodejs" to Tools > Options > Projects and Solutions > Web Package Management > External Web Tools > Locations of external tools and move it to the top
  - TypeScript 2.4.1 SDK ([release notes](https://github.com/Microsoft/TypeScript/releases/tag/v2.4.1))[[download](http://download.microsoft.com/download/7/0/A/70A6AC0E-8934-4396-A43E-445059F430EA/2.4.1-TS-release-dev14update3-20170626.1/TypeScript_SDK.exe)]
  - Visual Studio Extentions:
    - Web Essentials 2017
    - Markdown Editor
    - NPM Task Runner

## Setup
- Run Command Prompt or Git Bash as Administrator and access the project's folder where package.json resides (`cd mpm`). Git Bash will display the branch name you are working on at each prompt when in this directory)
- Run `npm install -g ionic@latest`, which will install the Ionic CLI globally
- Run `npm install`, which will download all required node modules to `node_modules`

## Development
Run  `npm run serve:mpm` or `npm run serve:cch` to enable watchers on the src folder and automates bundling & minification of css/js/html. This will also launch a browser run.

![ide simulator and browser](img/ide.png)

## Local Server API Configuration
To configure a local API for an application, use a "local.json" file:
1. Add a local.json file to the project root (sibling to package.json) with your local IP or path specifed as the host.  Ensure _"Exclude From Project"_ is set on this file so it will not overwrite any other developer's configuration.  The file "local.json" is already excluded in .gitignore.  To get started quickly, there is a local.template.json file that can be renamed.  The template file has complete information and examples on setting up the values pertinent to your environment.  An example local.json for API configuration is:
    ```
    {
        "client": "192.168.1.3",
        "server": "192.168.1.3:52606",
        "cch": {
            "authApi": {
                "endpoint": "http://localhost/auth/v1"
            },
            "healthCareSearchApi": {
                "endpoint": "http://localhost/search/v1"
            }
        }
    }
    ```
    Make sure to specify the server port for your local API IIS bindings.
2. Enable an inbound TCP & UDP port 8000 for nodejs in Windows Firewall (if applicable)
3. Run your app webserver task
4. Open your local server instance IP at port 8000 in a browser on your network client device (e.g. http://192.168.1.3:8000)

## Local Default User Configuration
To configure a set of default user credentials for a particular API, use a "local.json" file:
1. Add a local.json file (see _Local Server API Configuration_ above) with a "defaultUser" object on the desired API configuration.  An example local.json for the CCH configuration is:
    ```
    {
        "cch": {
            "authApi": {
                "defaultUser": {
                    "userName": "mary.smith@customer.com",
                    "password": "customerPassw0rd"
                }
            }
        }
    }
    ```
    During the build step, the defaultUser object is added to the API object that is specified in the local.json file and compiled into the AppConfig object.  
2. In the Login page, the configured defaultUser object may be used to fill credentials.  The defaultUser object will only ever be present on a local build.  It will never be present in any build greater than one used for local testing.  Use within the CCH Login object looks like:
    ```
    // Set defaultUser creds from AppConfig if possible
    if (AppConfig.authApi.defaultUser) {
        this.email = AppConfig.authApi.defaultUser.userName;
        this.password = AppConfig.authApi.defaultUser.password;
    }
    ```

## Adding Brands
Run `npm setup:brand --b [brandId] --e dev` to initialize brand dev app and web projects

## Preferences
If you want to view all files in the MPM.nsproj, add MPM.nsproj.user to the repo root with the following:
```
<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="15.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <PropertyGroup>
    <ProjectView>ShowAllFiles</ProjectView>
  </PropertyGroup>
</Project>
```
This user preference file is ignored by Git.

## References

https://github.com/driftyco/ionic-app-scripts

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/docs/v2/getting-started/) page.
