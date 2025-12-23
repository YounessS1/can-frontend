function App() {
  return (
    <div>
      <h1>CAN 2025 Hub</h1>
      <p>AWS API 1: {import.meta.env.VITE_AWS_API_1_BASE}</p>
      <p>Azure VM: {import.meta.env.VITE_AZURE_VM_BASE}</p>
    </div>
  );
}

export default App;
