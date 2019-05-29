---
layout: markdown
title: Amazon S3 guide
---

## How to configure Amazon S3 and use it in ShareX

### Get AWS account

* Register for Amazon Web Services account: [aws.amazon.com](https://aws.amazon.com)

### Create policy

We are going to create this policy to increase our security by giving only PutObject permission which is used when uploading files.

* Open [policies page](https://console.aws.amazon.com/iam/home#/policies)
* Press `Create policy`
* Click `Service` and select `S3`
* Click `Actions`, select `PutObject (Write)` and `PutObjectAcl (Permissions management)` to give only put object permission
* Click `Resources`, make sure `Specific` is selected and click `Add ARN` link
* You can use specific bucket name here to give access or press `Any` to give access to all your buckets (You can select `Any` for now, you can change it later when you have multiple buckets)
* Select `Any` also for object name
* Press `Add` in `Add ARN(s)` dialog
* Press `Review policy`
* Give name for policy, for example `ShareX_PutObject`
* Press `Create policy`

### Create group

* Open [groups page](https://console.aws.amazon.com/iam/home#/groups)
* Press `Create New Group`
* Give name for group, for example `ShareX`
* Press `Next Step`
* Click `Policy Type` dropdown and select `Customer Managed`
* Click check box of your recently created policy which should be `ShareX_PutObject` if you used example name
* Press `Next Step`
* Press `Create Group`

### Create user

* Open [users page](https://console.aws.amazon.com/iam/home#/users)
* Press `Add user`
* Write username you want
* In access type section click check box of `Programmatic access`
* Click `Next: Permissions`
* Click check box of your recently created group which should be `ShareX` if you used example name
* Press `Next: Review`
* Press `Create user`
* **Important:** In this page either note `Access key ID` and `Secret access key` to somewhere or press `Download .csv` to save them as file, we need these later in ShareX

### [Optional] Secure your account

You don't need to do these but it is suggested for security of your account.

* Open [Identity and Access Management page](https://console.aws.amazon.com/iam/home)
* Make sure all security status is green tick in this page, you need to activate multi-factor authentication and create password policy which should be easy

### Create S3 bucket

The bucket is where your uploaded files will be stored.

* Open [S3 Management Console](https://s3.console.aws.amazon.com/s3/home)
* Press `Create bucket`
* **Important:** If you are going to use your domain with S3 then bucket name should be same as your CNAME. For example if you want to use this URL `https://i.example.com/image.png` then bucket name should be `i.example.com`. [Click here for more info.](http://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingCustomURLs)
* Write bucket name you want
* Select region you want bucket to be hosted in (You can use this web site to check ping of regions: [cloudping.info](http://www.cloudping.info))
* Press `Next` 2 times, unless you want to change any default setting
* Untick `Block all public access`
* Press `Next` Once, unless you want to change any other settings
* Press `Create bucket`

### [Optional] Configure DNS for custom domain

If you are going to use your own domain then you must configure DNS.

For example if you are using [Cloudflare](https://www.cloudflare.com/), your bucket name is `i.example.com` and it is stored in `EU (Frankfurt)` region then these are DNS settings:

* Type: `CNAME`
* Name: `i`
* Value: `i.example.com.s3.eu-central-1.amazonaws.com`

You can find list of region endpoints from `Destinations -> Destination settings -> Amazon S3 tab -> Endpoints`

So value should be `{bucketname}.{endpoint}`

[Check here for more info.](http://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingCustomURLs)

### Configure ShareX Amazon S3 settings

* Open `Destinations -> Destination settings`
* Select `Amazon S3` tab
* Use `access key` and `secret key` which you got previously end of user creation
* Select the endpoint that you used while creating bucket
* Fill bucket name same as which you created
* For the upload path I suggest using `%y/%mo` which creates such folder `2017/12`
* If you are using your own domain then check `Use custom domain` and fill text box for example like this: `https://i.example.com`
* Now you can close destination settings window
* In main window make sure to select Amazon S3 as destination for image uploader, text uploader and file uploader

Now you are ready to use [Amazon S3](https://aws.amazon.com/s3/) in ShareX!
