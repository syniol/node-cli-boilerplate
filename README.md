# Node.js CLI TypeScript Boilerplate
This project intended for internal use at Syniol; However, I made this Open Source 
for other Node.js enthusiasts to enjoy a quick boilerplate CLI. This template is used 
where Node.js is utilised as a main language of choice for your own company or clients.


## Up and Running
First you will need to clone the repository:

**Using HTTPS**
```shell
git clone https://github.com/syniol/node-cli-boilerplate.git
```

**Using SSH**
```shell
git clone git@github.com:syniol/node-cli-boilerplate.git
```

After successfully cloning the repository, You can test the example application by running `npm start`. 
You can find example functions inside `src/functions` folder. Please remove these files and place 
your own functions.


## How-to
Only execution functions should be added inside the `src/functions` folder. Your services and 
injected dependencies could be structured according to your personal development needs. In case 
order of execution is important, you could prepend the files with a number. e.g.:

 * `1-cron-log-enrichment.ts`
 * `2-upload-logs-on-s3.ts`

Signature method for functions should follow the same type as demonstrated below and no need to 
name your method due to use of `export default`:

```typescript
export default function (args?: string[])
```
> CLI arguments provided by client will be automatically passed as an array of strings.


## Use cases
This could be used where CLI is required to run a single or multiple services. Some of uses cases are:
 * Cron Jobs
 * CQS/CQRS Architecture where commands are executed in a separate microservice
 * Standalone application


## K8S and Docker Ready
There is `Dockerfile` at the root of the project that could be utilised for deploying the CLI app inside via 
Docker Compose/Swarm or Kubernetes.


###### Credits
Author: [Hadi Tajallaei](mailto:hadi@syniolcom?subject=Node.js CLI Boilerplate Support)

Copyright &copy; 2022-2026 Syniol Limited. All rights reserved.
