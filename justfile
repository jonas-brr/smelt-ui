
setup:
  cd smelt-ui && npm install
  cd mock-server && npm install


[working-directory: 'mock-server']
mock:
  VITE_BACKEND_PORT=3000 npm run dev

  
[working-directory: 'smelt-ui']
dev:
  VITE_BACKEND_PORT=3000 npm run dev
