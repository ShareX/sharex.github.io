---
layout: markdown
title: Cloudflare R2 guide
---

## How to configure Cloudflare R2 and use it in ShareX

Make an account for [Cloudflare](https://cloudflare.com).

Ensure that your domain is [added](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/) onto Cloudflare and verified with NS (Name Server) records on your domain registrar. Your domain has to be hosted through Cloudflare otherwise this won't work at all, and you will be unable to use R2 / Cloudflare CDN to host your images.

While R2 is not free, it does have a generous free tier. The full pricing is available to see [here](https://developers.cloudflare.com/r2/platform/pricing/).

### To create a bucket: 

1. Open [R2](https://dash.cloudflare.com/?to=/:account/r2).
2. Select `Create bucket`.
3. Type in your bucket name of choice, and click `Create Bucket`.
4. Select `Settings`.
5. Scroll to `Domain Access` and select `Connect Domain`.
6. Type in your domain and select `Continue`.
7. Select `Connect domain`.

This will connect your domain to the R2 bucket, and will allow any objects inside of that bucket to be accessible by the selected domain.

### To create an API token:

1.  Open [R2](https://dash.cloudflare.com/?to=/:account/r2).
2.  Select `Manage R2 API Tokens` on the right top side of the dashboard.
3.  Select `Create API token`.
4.  Select the pencil icon or `R2 Token` text to edit your API token name.
5.  Under `Permissions`, select `Read` or `Edit` for your token.
6.  Select `Create API Token`.
7.  Save a copy of your `Access Key ID` and `Secret access key` for the next step.

### To configure uploading with ShareX: 

1. In `Destinations`, select `Destination Settings`.
2. Scroll down to `Amazon S3` and select it.
3. Using the `Access Key ID` & `Secret access key` fill in the two top boxes.
4. Select "`Endpoint:`" and type `<ACCOUNT_ID>.r2.cloudflarestorage.com`. (you can find your account ID on the right hand side of your [Dashboard](https://dash.cloudflare.com/?to=/:account/r2))
5. Set `Region:` to `auto`.
6. Fill `Bucket name:` with the Bucket Name you picked on Cloudflare.
7. Change `Upload path:` to your preference. 
8. Update `Use custom domain:` to the domain that you selected in the first step.
9. Untick "Set public-read ACL on file".
10. Ignore the rest of the settings.
11. In `Destinations`, select `Image uploader:` and change it to `File Uploader -> Amazon S3`.
12. Take a screenshot, and ensure that it uploads correctly.

Now you are ready to use [Cloudflare R2](https://www.cloudflare.com/products/r2) in ShareX!