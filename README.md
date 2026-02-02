# Node.js CLI TypeScript Boilerplate
This project was originally developed for internal utilisation within Syniol. Nevertheless, it has been made publicly available as open-source to benefit other Node.js enthusiasts by providing a readily accessible boilerplate CLI. This template serves as a foundational tool for environments where Node.js is the predominant programming language selected for a company's internal projects or for client work.


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

Following the successful cloning of the repository, the example application can be initiated by executing the command `npm start`. Within the `src/functions` directory, you will discover sample functions. It is requested that these files be deleted and replaced with your proprietary functions.

<p align="center"><img width="716" height="479" alt="Image" src="https://github.com/user-attachments/assets/97d32fb5-a43e-4361-a17f-59761beb1bb8" /></p>


## How-to Guide
Within the `src/functions` directory, it is imperative to exclusively house execution functions. The organization of your services and injected dependencies can be tailored to align with your individual development requirements. Should the sequence of execution be a critical consideration, you may prefix files with numerical identifiers to dictate their order, for instance.

 * `1-cron-log-enrichment.ts`
 * `2-upload-logs-on-s3.ts`

The signature for functions must adhere to the type exemplified herein, and explicit naming of the method is unnecessary owing to the utilization of `export default`.

```typescript
export default function (args?: string[])
```
> CLI arguments provided by the client will be automatically passed as an array of strings.


## Use cases
This functionality is applicable in scenarios necessitating the execution of one or more services via a Command Line Interface (CLI). Potential applications include:

 * Scheduled tasks (Cron Jobs)
 * Command Query Responsibility Segregation (CQS) or Command Query Responsibility Segregation (CQRS) architectural patterns, wherein commands are processed by an independent microservice
 * Self-contained applications


## K8S and Docker Ready
A Dockerfile is present at the project's root directory, which can be employed for deploying the command-line interface application within environments such as Docker Compose, Docker Swarm, or Kubernetes.


### Credits
Author: [Hadi Tajallaei](mailto:hadi@syniolcom)

Copyright &copy; 2022-2026 Syniol Limited. All rights reserved.
