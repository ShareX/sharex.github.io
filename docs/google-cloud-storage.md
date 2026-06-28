---
layout: markdown
title: Google Cloud Storage guide
---

## How to configure Google Cloud Storage and use it in ShareX

### Create a project

* Open [Google Cloud Console](https://console.cloud.google.com)
* Click `Select a project`, then `New project`
* Name your project, for example `ShareX`
* Click `Create`

### Set up a billing profile

[Google Cloud Storage Pricing](https://cloud.google.com/storage/pricing)

Google Cloud Storage isn't free; it's billed based on usage rather than a fixed monthly fee. Storage is inexpensive for light usage, with many users paying only a few cents per month.

* Open [billing](https://console.cloud.google.com/billing) and set up a profile

### Create a bucket

* Open [storage](https://console.cloud.google.com/storage)
* Click `Create bucket`
* If you plan to use a custom domain, first verify it using this [guide](https://cloud.google.com/storage/docs/domain-name-verification), then name your bucket after the domain. For example, to use `https://i.example.com/image.png`, name the bucket `i.example.com`
* Storage class should be `regional` if you plan on using a CDN like [Cloudflare](https://www.cloudflare.com), or `multi-regional` if not
* Access control should be `Fine-grained`
* Click `Create`

### [Optional] Configure DNS for a custom domain

If you are going to use your own domain, you must configure DNS.

For example, if you are using [Cloudflare](https://www.cloudflare.com/) and your bucket name is `i.example.com`, use these DNS settings:

* Type: `CNAME`
* Name: `i`
* Value: `c.storage.googleapis.com`

### Configure ShareX Google Cloud Storage settings

* Open `Destinations -> Destination settings`
* Select the `Google Cloud Storage` tab
* Complete authorization
* Enter the name of the bucket you created
* For the upload path, it is recommended to use `%y/%mo`, which creates a folder such as `2017/12`
* If you are using a custom domain, enter it in the custom domain box. Google Cloud Storage doesn't natively support HTTPS for custom domains, so unless you are using a TLS proxy such as [Cloudflare](https://www.cloudflare.com/), you must prepend `http://` to your domain. For example, enter `http://i.example.com`
* If your bucket uses uniform permissions, uncheck `Set public-read ACL on file` because ACLs aren't supported in uniform-permission buckets
* Now you can close the destination settings window
* In the main window, make sure to select Google Cloud Storage as the destination for the image uploader, text uploader, and file uploader

Now you are ready to use [Google Cloud Storage](https://cloud.google.com/storage) in ShareX!
