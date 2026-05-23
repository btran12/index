## Place Forum Starter

This repo now includes:

- `mobile-app/`: React Native (Expo) frontend prototype with temporary/mock data.
- `infra/backend-cloudformation.yml`: AWS CloudFormation template for backend baseline.

### Frontend quick start

```bash
cd mobile-app
npm install
npm run start
```

### Deploy backend

```bash
aws cloudformation deploy \
  --template-file infra/backend-cloudformation.yml \
  --stack-name place-forum-dev \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides EnvironmentName=dev GooglePlacesApiKey=YOUR_KEY
```
