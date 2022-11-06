# Kubernetes Cheat Sheet

I gathered some notes from this video about [Kubernetes Tutorial For Beginners](https://www.youtube.com/watch?v=X48VuDVv0do) which helped me understand the fundamentals of Kubernetes. The notes below are what I wrote as I was following the video.

## Managing Kubernetes

  * Kubectl - create pods, destroy pods, create services for production or testing environments
  * Hypervisor - Needed for Virtual Box or Virtual Machine (Docker is used automatically for Mac)
  * MiniKube - creates a Kubernetes cluster, starts, stops, mounts volumes, and `ssh` into the cluster

## Start the cluster

```
> minikube start --vm-driver=hyperkit # Start Kubernetes
> kubectl get nodes
> minikube status
> kubectl version
```

Basic Kubectl Commands and Debug in MiniKube

```
> kubectl get nodes
> kubectl get services
```

### Create a blueprint for creating the Pod

```
> kubectl create deployment <deployment_name> --image=<image_name>
```

### Get deployment information

```
> kubectl get deployment
> kubectl get pod --watch
```

### Get the number of scalable set of Pods
```
> kubectl get replicaset --watch
```

### Edit the deployment
```
> kubectl edit deployment nginx-depl
> kubectl get pod --watch # Do several times to check deployment changes
```

* Deployment manages Replicaset
* Replicaset manages Pod
* Pod is an abstraction of a container

### Delete the deployment
```
> kubectl delete deployment nginx-depl
> touch config-file.yaml
> kubectl apply -f config-file.yaml
> kubectl delete -f config-file.yaml
```

**Note:** The config file can be kinds of Secret, Deployment, Service, or MapConfig.

### Sample Config File

Below is the content of `kubectl edit deployment nginx-depl`. This can be placed in any `config-file.yaml`

```
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    deployment.kubernetes.io/revision: "1"
  creationTimestamp: "2022-11-04T05:06:24Z"
  generation: 1
  labels:
    app: nginx-depl
  name: nginx-depl
  namespace: default
  resourceVersion: "1996"
  uid: b3a97042-fc66-4a1b-bf0a-a28347cb2f45
spec:
  progressDeadlineSeconds: 600
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app: nginx-depl
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: nginx-depl
    spec:
      containers:
      - image: nginx
        imagePullPolicy: Always
        name: nginx
        resources: {}
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: {}
      terminationGracePeriodSeconds: 30
```

## The Configuration File:


### 3 parts of a configuration file:

* metadata - name of the component
* specification - configuration for the component
* status - automatically changed by Kubernetes


### Kinds of Configuration:

Pod - running application abstracted from an image.
Replicaset - similar to Auto-scaling groups where the number of nodes are set.
Service - content has selectors to select deployments
Deployment - data has templates that also have metadata and specifications
Secret - Store the secret parameters, such as username, password, and keys
ConfigMap - Configuration that does not need to be encrypted.
Ingress - Has routing rules used to expose everything publicly.
PersistentVolume - Storage or volume used by Kubernetes
StorageClass - the class of storage to be used (AWS EBS, AWS EFS, etc.)
ClusterIP - The top level IP as Service

### Specifications

Replicas
Available Replicas

**Note:** Use yaml validator to validate Kubectl YAML Configuration files.



### Additional Notes

* The YAML configuration indicates through labels if a Deployment belongs to a service
* Service has ports configuration

```
> kubectl get service
> kubectl get pod
> kubectl get secret
> kubectl get configmap -n <namespace>
```

### Copy data of nginx deployment, but clean deployment

```
> kubectl get deployment nginx-depl -o yaml > nginx-depl-response
```

## Kubectl Deployment And Service

* Deployment and service usually go together. You can put both deployment and service into one file.
* The service can be of `LoadBalancer` type, which has a `nodePort`
* You can add a Type for the Load Balancer to accept external request.
* `nodePort` has a range of 30000-32767

### Service Types:

* ClusterIP - Internal to the port using targetPort
* LoadBalancer - accept external request going in and out of the node using nodePort

### Types of Port in a Service and Ingress:

* port - port coming from a deployment
* targetPort - private port open for communication
* nodePort - public port outside of the node.
* servicePort - only inside an Ingress Type

**Note:** Deployment and service can belong together in 1 file in YAML using "---"

### Check the service settings

```
> kubectl get service
```

### Run the command to create an external IP

```
> service mongo-express-service
```

### Sample application when you hit Mongo-Express:

```
Mongo-Express > Mongo Express External Service > Mongo Express Pod > MongoDB Internal Service > MongoDB Pod
```

## Namespaces
* kube-system - manages systems and master processes. Should not be touched
* kube-public - publicly accessible data
* kube-node-lease - heartbeat of node objects running
* default - where all resources are located

```
> kubectl get namespaces
> kubectl cluster info
> kubectl create namespace <namespace>
```

**Best Practice:** Always use namespace in a configuration file:

```
metadata:
  name: mysql-configmap
  namespace: my-namespace
```

### Why use namespaces?

* The best way to create a namespace is to use a configuration file as a repository of what you created in the cluster.
* Group resources into one namespace
* Group namespaces into what the team uses
* Staging deployment or Production Depeloyment
* Access and resource limits for memory and storage for each person or a team

### Limitations of Namespaces
* ConfigMap and Secret cannot be shared within each namespace, it has to be created for each namespace
* A Service can be the same in a shared space
* Volume is not in a namespace and is available in all of Kubernetes

### Other Matters

You can install `kubectx` to use `kubens` CLI to know which namespace is active and to be able to switch to another namespace.

## Ingress

Here is the sample flow of the DNS

```
DNS (App) > Kubernetes Ingress > Kubernetes Service > Kubernetes Pod
```


To enable the ingress automatically based on the config file, run this command

```
> minikube addons enable ingress
```

To get the list of pods in the namespace, run this command:

```
> kubectl get pod -n kube-system
```

To get all the pods, service, secret, configmap, etc. belonging to the namespace in Kubernetes

```
> kubectl get all -n <namespace>
```

### Other Matters

* You can use Ingress to serve only a specific path in a hostname by creating a pod which directs to the service
* You can configure TLS certificate in Secret config file Kinds.
* The values should be file contents and not file paths.

## Helm

### Helm Features

* Package Manager for Kubernetes
* Templating Engine - Same application across different environments
* Release Management - versioning system

### Helm Charts

Bundle of YAML pods, services, secrets, configmaps, and ingress files that are packaged.

### Helm Commands

```
> helm search <keyword>
> helm install <chartname>
```

### Install the Helm chart

```
> helm install --values=values.yaml <chartname> 
# You can override a value
> helm install --values=my-values.yaml <chartname> 
```

### Other Matters

* Private registries are shared within the organization.
* The template YAML file inside a Helm Chart can use a placeholder for replaceable values.
* `Values.yaml` file can be used to store the parameters used by Helm Chart templates.
* The values.yaml file can be used for each as the environment variables

### Directory Structure of Helm Chart

```
mychart/
  Chart.yaml
  values.yaml
  charts/
  templates/
mychart/ - name of chart
Chart.yaml - Meta info about chart
Values.yaml - Values for the template file
charts/ - chart dependencies
templates/ - actual templates of YAML files are stored
```

### Helm Comes In Two Parts

* Helm Client
* Tiller (Server)

### Tiller Actions/Release Management

* When `helm install <chartname>` is executed, Tiller will create the services inside the Kubernetes Cluster, considered to be a Release Management system.
* Tiller stores the copy of chart executions and its history

### More about Tiller

* Tiller has too much power inside Kubernetes Kluster
* It can create, update, delete components and has too much permissions (security issue)
* In Helm 3, Tiller got removed and it's now the Helm Binary.

## Kubernetes Volumes

* It is an abstract component that stores data in a local hard drive, a network file system, or an AWS Cloud Storage.
* It is an interface and not necessarily a real volume. The volume capacity and speed is still dependent on the hardware.
* You still need to use storage and backups.
* Each pod can interface with different volume or storage types.
* Volumes are not namespaced
* Pods can claim volumes as the persistence volume claim

### About Storage

* Persistent Volume - The storage volume
* Persistent Volume Claim - The configuration or interface to communicate with a volume
* Storage Class - provisions persistent volumes dynamically

### Why use Volumes

* When you restart a pod, all data will be gone because data is not persisted.
* Storage must be available on all nodes, especially when other pods are communicating to a single persisted data
* If the entire cluster crashes, the storage still survives.

### StatefulSet

* StatefulSets are Stateful applications - databases, mongodb, mysql, etc. deployed using StatefulSet
* Each pod has a different entity, especially if you have different replicas of a database.
* Each StatefulSet has identification.
* Master Pods can write data and all the slaves and master should be updated synchronously
* If a new volume comes in, the new volume and pod updates synchronously the last volume that was updated.
* If all pods die, data will be gone. That's why we use PersistenceVolume.
* Another pod won't be created until the first Pod has finished loading.
* Delete StatefulSet deletes the last created Pod first.
* Configure storage the same way


### Stateless applications
* deployed using Deployments

## Services

* Pod IP addresses always changes but it does not automatically have an IP address.
* The Service IP address is stable even if the Pod dies.

## Cluster IP

* If the service does not have a Type, it will be automatically assigned as ClusterIP type
* If the service does not have an assigned IP address, it will automatically use the IP address of the Pod.
* You can either use Ingress or a real AWS Load Balancer to communicate with ClusterIP

