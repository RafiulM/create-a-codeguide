flowchart TD
  Start[Visitor on Landing Page] -->|Click Sign Up or Log In| AuthPage
  AuthPage[Sign Up or Log In Form] -->|Submit Credentials| AuthAPI
  AuthAPI[API Auth Route] -->|Create or Verify User| DB[PostgreSQL Database]
  AuthAPI -->|Success| Dashboard[Protected Dashboard]
  AuthAPI -->|Error| AuthPage