# Create AWS EC2 Instance Using CloudFormation

## CloudFormation Template

Create a CloudFormation Template file named `simple-ec2.yml`

```
AWSTemplateFormatVersion: '2010-09-09'
Description: 'Simple deployment of EC2'

Resources:
  Ec2Instance01:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: ami-0d593311db5abb72b
      KeyName: !Ref Ec2KeyPair
      InstanceType: t2.micro
      SecurityGroups:
        - !Ref SgSshWeb

  Ec2Instance01Ip:
    Type: AWS::EC2::EIP
    Properties:
      InstanceId: !Ref Ec2Instance01

  SgSshWeb:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: Simple HTTP Access
      GroupName: Simple Web Server
      SecurityGroupIngress:
        - CidrIp: 0.0.0.0/0
          FromPort: 80
          IpProtocol: tcp
          ToPort: 80
        - CidrIp: 0.0.0.0/0
          FromPort: 22
          IpProtocol: tcp
          ToPort: 22

  Ec2KeyPair:
    Type: AWS::EC2::KeyPair
    Properties:
      KeyName: ec2-keypair
      KeyType: rsa
```

## Deploy your EC2 instance

Deploy EC2 using CloudFormation and Makefile by running this command.

```
aws cloudformation deploy \
	--template-file=simple-ec2.yml \
	--stack-name=simple-ec2
```

## Get the Key Pair value

Get the parameters value in the AWS Systems Manager Parameter Store

```
aws ssm describe-parameters
```

## SSH Into Instance

* Create a file named `~/.ssh/ec2-keypair.pem` and add the values of the SSM parameter.
* Run the command `chmod 400 ~/.ssh/ec2-keypair.pem`
* Run the command `ssh -i ~/.ssh/ec2-keypair.pem ec2-user@<ip address>`

