services:
  - type: web
    name: your-nestjs-app
    env: node
    buildCommand: "npm install && npm run build"
    startCommand: "npm run start:prod"
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 10000
    # Add other environment variables as needed
  - type: postgres
    name: your-db
    plan: starter
    region: oregon
    # Add database configuration if needed
databases:
  - name: your-db
    plan: starter
    region: oregon
