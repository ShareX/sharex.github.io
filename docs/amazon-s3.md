---
layout: markdown
title: Amazon S3 guide
---

## How to configure Amazon S3 and use it in ShareX

### Get AWS account

* Sign-in or register for an Amazon Web Services account: [aws.amazon.com](https://aws.amazon.com)

### Create policy

We are going to create this policy to increase our security by giving only PutObject permission which is used when uploading files.

* Open [policies page](https://console.aws.amazon.com/iam/home?#/policies)
* Press `Create policy`
* Click `Service`, type `S3` and then select `S3`
* Click `Actions`, type `PutObject` and then select both `PutObject` and `PutObjectAcl` to give only put object permission
* Click `Resources`, make sure `Specific` is selected and then click the `Add ARN` link
* Select `Any` to give access to all your buckets

**Note:** You can uncheck `Any` later if you prefer to use a specific bucket name instead.
* Select `Any` also for object name
* Press `Add` in `Add ARN(s)` dialog
* Press `Review policy`
* Give a name for the policy, for example `ShareX_PutObject`
* Press `Create policy`

### Create group

* Open [groups page](https://console.aws.amazon.com/iam/home?#/groups)
* Press `Create New Group`
* Give a name for the group, for example `ShareX`
* Press `Next Step`
* Click `Policy Type` dropdown filter and select `Customer Managed`
* Click the checkbox of your recently created policy which should be named `ShareX_PutObject` if you used that example name
* Press `Next Step`
* Press `Create Group`

### Create user

* Open [users page](https://console.aws.amazon.com/iam/home?#/users)
* Press `Add user`
* Type the username you want
* In the access type section, click the check box of `Programmatic access`
* Click `Next: Permissions`
* Click the checkbox of your recently created group which should be named `ShareX` if you used that example name
* Press `Next: Tags`
* Press `Next: Review`
* Press `Create user`

**Important:** In this page, either make a record of `Access key ID` and `Secret access key` somewhere or press `Download .csv` to save them as a file. We need these later in ShareX.
* Press `Close`

### [Optional] Secure your account

You don't need to do these but it is suggested to keep your account secure.

* Open [Identity and Access Management page (Dashboard)](https://console.aws.amazon.com/iam/home)
* Make sure all security status items are checked as green on this page

You may need to activate multi-factor authentication and create a password policy which should be easy.

### Create S3 bucket

The bucket is where your uploaded files will be stored.

* Open [S3 Management Console](https://s3.console.aws.amazon.com/s3/home)
* Press `Create bucket`

**Important:** If you are going to use your own domain with S3 then the bucket name should be the same as your CNAME. For example, if you want to use this URL: `https://i.example.com/image.png` then bucket name should be `i.example.com`. [Click here for more info.](http://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingCustomURLs)
* Type the bucket name you want
* Select the region you want the bucket to be hosted in

**Tip:** You can use this website to check ping of regions: [cloudping.info](https://www.cloudping.info)
* If you want your uploaded files to be accessible by URL then make sure `Block all public access` option is unchecked
* Press `Create bucket`

### [Optional] Configure DNS for custom domain

If you are going to use your own domain then you must configure DNS.

For example, assume that you are using [Cloudflare](https://www.cloudflare.com/), your bucket name is `i.example.com` and it is stored in `EU (Frankfurt)` region. Your DNS settings will then be:

* Type: `CNAME`
* Name: `i`
* Target: `i.example.com.s3.eu-central-1.amazonaws.com`

You can find a list of region endpoints from `ShareX main window -> Destinations -> Destination settings -> Amazon S3 tab -> Endpoints`.

So the target should be `{bucketname}.{endpoint}`

[Check here for more information.](http://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingCustomURLs)

### Configure ShareX Amazon S3 settings

* From ShareX main window, open `Destinations -> Destination settings`
* Select `Amazon S3` tab
* Use `access key ID` and `secret access key` which you noted down previously
* For the endpoints section select the region that you choose while creating the bucket
* Fill bucket name same as which you created
* For the upload path it is recommended to use `%y/%mo` which creates sub-folders such as  `2020/04`
* If you are using your own domain then check `Use custom domain` and fill the text box for example: `https://i.example.com`
* You can now close the destination settings window
* In main window make sure to select Amazon S3 as destination for image uploader, text uploader and file uploader

Now you are ready to use [Amazon S3](https://aws.amazon.com/s3/) in ShareX!
