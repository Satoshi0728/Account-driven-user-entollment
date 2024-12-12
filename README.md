# Intune Account-Driven User Enrollment

Welcome to King of Ofuro's "Intune Account-Driven User Enrollment" repository.

This repository contains an Azure Function written in TypeScript that facilitates account-driven user enrollment for Microsoft Intune on Apple devices.

## Overview

The `accountdrivenfunc` function handles HTTP requests and responds with the necessary server configuration for device enrollment. It returns a JSON object containing the `BaseURL` for the Intune enrollment server, which includes your Azure Active Directory Tenant ID.


## Prerequisites

- Node.js (version 14 or higher)
- Azure Functions Core Tools
- An Azure account with permission to create resources
- TypeScript installed globally (`npm install -g typescript`)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/intune-account-driven-user-enrollment.git

2. **Navigate to the project directory**
   ```bash
   cd intune-account-driven-user-enrollment

3. **Install dependencies**
   ```bash
   npm install

4. **Set up environment variables**
- Create a .env file in the root directory.
- Add your Azure AD Tenant ID:
   ```bash
   TENANT_ID=your-tenant-id


4. **Build the project**
   ```bash
   npm run build

## Usage

### Running Locally

1. **Start the Azure Function**

2. **Access the function endpoint**

   - Navigate to: `http://localhost:7071/.well-known/com.apple.remotemanagement`

### Deploying to Azure

1. **Log in to Azure**
   ```bash
   az login
   
2. **Create a Resource Group**
   ```bash
   az group create --name YourResourceGroupName --location YourRegion
   
3. **Create a Storage Account**
   ```bash
   az storage account create --name yourstorageaccount --location YourRegion --resource-group YourResourceGroupName --sku Standard_LRS --allow-blob-public-access false
   
4. **Create a Function App**
   ```bash
   az functionapp create --resource-group YourResourceGroupName --consumption-plan-location YourRegion --runtime node --runtime-version 18 --functions-version 4 --name yourfunctionapp --storage-account yourstorageaccount
   
5. **Deploy the Function**
   ```bash
   func azure functionapp publish yourfunctionapp
   
### Configuring Custom Domain

1. **Purchase a custom domain** (e.g., `yourdomain.com`).

2. **Configure DNS settings** with your domain registrar to point to your Azure Function App.

3. **Add Custom Domain in Azure**

   - Navigate to your Function App in the Azure Portal.
   - Go to **Custom domains** and add your domain.

4. **Secure with SSL**

   - In the Azure Portal, go to **TLS/SSL settings**.
   - Add a **Binding** to secure your custom domain with HTTPS.

## Function Details

- **Endpoint**: `https://yourdomain.com/.well-known/com.apple.remotemanagement`
- **Method**: `GET`
- **Response**: JSON object with server information for device enrollment.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.



  
