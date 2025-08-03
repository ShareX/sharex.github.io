---
layout: markdown
title: Amazon S3 Guide
---

## How to Configure Amazon S3 and Use It in ShareX

### Create an AWS Account

* Sign in or register for an Amazon Web Services account: [aws.amazon.com](https://aws.amazon.com)

### Create a Policy

We'll create a policy that limits permissions to only `PutObject`, which is used for uploading files.

* Open the [Policies page](https://console.aws.amazon.com/iam/home?#/policies)
* Click `Create policy`
* Click `Service`, type `S3`, and select `S3`
* Click `Actions`, type `PutObject`, and select both `PutObject` and `PutObjectAcl` to grant only upload-related permissions
* Click `Resources`, ensure `Specific` is selected, then click `Add ARN`
* Choose `Any` to allow access to all your buckets

**Note:** You can later uncheck `Any` and specify a particular bucket name for tighter security.
* Also select `Any` for object name
* Click `Add` in the ARN dialog
* Click `Review policy`
* Name the policy, for example: `ShareX_PutObject`
* Click `Create policy`

### Create a Group

* Open the [Groups page](https://console.aws.amazon.com/iam/home?#/groups)
* Click `Create New Group`
* Name the group, for example: `ShareX`
* Click `Next Step`
* Filter policies by selecting `Customer Managed`
* Check the box for your recently created policy (e.g., `ShareX_PutObject`)
* Click `Next Step`
* Click `Create Group`

### Create a User

* Open the [Users page](https://console.aws.amazon.com/iam/home?#/users)
* Click `Add user`
* Enter a username of your choice
* Under access type, check `Programmatic access`
* Click `Next: Permissions`
* Check the box for your recently created group (e.g., `ShareX`)
* Click `Next: Tags`
* Click `Next: Review`
* Click `Create user`

**Important:** On the final page, make sure to either copy the `Access key ID` and `Secret access key` or download the `.csv` file. You’ll need these later in ShareX.
* Click `Close`

### [Optional] Secure Your Account

These steps are optional but recommended to enhance account security.

* Open the [IAM Dashboard](https://console.aws.amazon.com/iam/home)
* Ensure all security status indicators are green

You may need to enable multi-factor authentication (MFA) and define a password policy.

### Create an S3 Bucket

The bucket is where your uploaded files will be stored.

* Open the [S3 Management Console](https://s3.console.aws.amazon.com/s3/home)
* Click `Create bucket`

**Important:** If you plan to use your own domain with S3, the bucket name must match your CNAME.  
For example, to use `https://i.example.com/image.png`, the bucket name should be `i.example.com`.  
[Learn more here.](http://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingCustomURLs)

* Enter your desired bucket name
* Select a region to host the bucket

**Tip:** Use [cloudping.info](https://www.cloudping.info) to find the region with the lowest latency.
* To make uploaded files publicly accessible via URL, uncheck the `Block all public access` option
* Click `Create bucket`

### [Optional] Configure DNS for a Custom Domain

If you're using your own domain, you’ll need to configure your DNS accordingly.

Assuming you use [Cloudflare](https://www.cloudflare.com/), and your bucket name is `i.example.com`, stored in the `EU (Frankfurt)` region, your DNS settings should be:

* Type: `CNAME`
* Name: `i`
* Target: `i.example.com.s3.eu-central-1.amazonaws.com`

You can find a full list of region endpoints in:  
`ShareX main window -> Destinations -> Destination settings -> Amazon S3 tab -> Endpoints`

So the target should be `{bucketname}.{endpoint}`


[More info here.](http://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingCustomURLs)

### Configure ShareX for Amazon S3

* Open ShareX
* Go to `Destinations -> Destination settings`
* Select the `Amazon S3` tab
* Enter the `Access key ID` and `Secret access key` you recorded earlier
* Choose the correct region (must match the one used when creating the bucket)
* Enter the bucket name exactly as you created it
* For the upload path, using `%y/%mo` is recommended — this creates subfolders like `2025/08`
* If using a custom domain, check `Use custom domain` and enter it, e.g., `https://i.example.com`
* Close the destination settings window
* Ensure Amazon S3 is selected as the destination for image, text, and file uploads in the main window

---

Now you're ready to use [Amazon S3](https://aws.amazon.com/s3/) with ShareX!

