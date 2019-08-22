## Teradata Vantage UI Template

###### Create Apps for Teradata Vantage using the Covalent UI Framework

---

### Setup

- Ensure you have **Node 10.15.3** (on a Mac use Homebrew and `brew install node@10.15.3`)
- Ensure you have **NPM 6+** installed.
- Install Docker Engine: [https://docs.docker.com/engine/installation/](https://docs.docker.com/engine/installation/)
- Install Angular CLI `npm i -g @angular/cli`
- Install Typescript `npm i -g typescript`
- Install TSLint `npm i -g tslint`
- Install Protractor for e2e testing `npm i -g protractor`
- Install Node packages `npm install`

### Development

1. Update the `serverUrl` variable in the `proxy.conf.js` to point to your vantage environment.

2. Run local webserver `npm run serve`

3. In Chrome go to [http://localhost:4200](http://localhost:4200)

### Build Container Image

1. Clean up the `deploy` directory.

Mac:

```bash
  rm -rf ./deploy/
  mkdir ./deploy/
```

Win:

```bash
  rmdir /S .\deploy\
  mkdir .\deploy\
```

2. Build Angular assets

```bash
  npm run build:prod
```

3. Move assets into `deploy` directory.

Mac:

```
  cp -r ./docker/* ./deploy
  cp -r ./dist/* ./deploy
```

Win:

```
  copy .\docker\* .\deploy
  copy .\dist\* .\deploy
```

4. Build docker image with assets
   - Replace `WEB_SERVER` with `nodejs` or `nginx` depending on your need
   - Replace `IMAGE_NAME` with a name of your choice

Mac:

```bash
  docker build -f deploy/WEB_SERVER/Dockerfile -t IMAGE_NAME ./deploy
```

Win:

```bash
  docker build -f deploy\WEB_SERVER\Dockerfile -t IMAGE_NAME .\deploy
```

4. Run command `docker images` and see it listed

5. You can run commands locally now like:
   - Replace `YOUR_BASE_URL` with your Vantage Environment Base URL
   - Replace `IMAGE_NAME` with the image name you used on step 3.

```bash
  docker run -e APPCENTER_BASE_URL=YOUR_BASE_URL -p 49160:8080 -d IMAGE_NAME

  docker exec -it CONTAINER_ID /bin/bash
```

### Deployment to Registry

1. Tag docker image and push to a repository
   - Replace `IMAGE_NAME` with the image name you used when building the image.
   - Replace `TAG` with a tag for the image. e.g. Version number
   - Replace `REPOSITORY` with the URL of the repository where you need to push the image.

```bash
  docker tag IMAGE_NAME:latest REPOSITORY/IMAGE_NAME:TAG
  docker push REPOSITORY/IMAGE_NAME:TAG
```
