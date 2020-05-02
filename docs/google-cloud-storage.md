---
layout: markdown
title: Google Cloud Storage guide
---

## How to configure Google Cloud Storage and use it in ShareX

### Create project

* Open [Google Cloud Console](https://console.cloud.google.com)
* Click `Select a project` then `New project`
* Name your project, for example `ShareX`
* Click `Create`

### Setup billing profile

[Google Cloud Storage Pricing](https://cloud.google.com/storage/pricing)

Google Cloud Storage isn't free, it's billed based on usage, not a static monthly fee. Storage is very cheap, most users bills will be free or 1-2 cents a month.

* Open [billing](https://console.cloud.google.com/billing) and setup profile

### Create bucket

* Open [storage](https://console.cloud.google.com/storage)
* Click `Create bucket`
* If you plan on using a custom domain, you must first verify the domain using this [guide](https://cloud.google.com/storage/docs/domain-name-verification), then name your bucket the domain you're going to use. For example, `https://i.example.com/image.png` bucket should be named `i.example.com`
* Storage class should be `regional` if you plan on using a CDN like [Cloudflare](https://www.cloudflare.com), or `multi-regional` if not.
* Access control should be `Fine-grained` 
* Click `Create`

### [Optional] Configure DNS for custom domain

If you are going to use your own domain then you must configure DNS.

For example if you are using [Cloudflare](https://www.cloudflare.com), your bucket name is `i.example.com` then these are DNS settings:

* Type: `CNAME`
* Name: `i`
* Value: `c.storage.googleapis.com`

### Configure ShareX Google Cloud Storage settings

* Open `Destinations -> Destination settings`
* Select `Google Cloud Storage` tab
* Complete authorization
* Fill bucket name same as which you created
* For the upload path I suggest using `%y/%mo` which creates such folder `2017/12`
* If you are using a custom domain fill it in. Google Cloud Storage doesn't support custom domain `https` natively, so unless you are using a tls proxy such as [Cloudflare](https://www.cloudflare.com), you must prepend `http` protocol to your domain. So in the custom domain box you would fill in exactly `http://i.example.com`
* If you are using uniform permissions in your bucket, make sure to untick `Set public-read ACL on file`, since ACL isn't supported in uniform permission buckets. 
* Now you can close destination settings window
* In main window make sure to select Google Cloud Storage as destination for image uploader, text uploader and file uploader

Now you are ready to use [Google Cloud Storage](https://cloud.google.com/storage) in ShareX!
