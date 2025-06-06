import DashboardValue from "./DashboardValue";

const Dashboard = () => {
  return (
    <div className="bg-blue-100 rounded-xl px-6 py-4 space-y-6">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-2xl">¡Hola, estudiante!</h1>
          <p className="text-neutral-600">Laboratorio de React Hooks</p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <DashboardValue label="Total de tareas">2</DashboardValue>
        <DashboardValue label="Completadas">
          <span className="text-green-500">0</span>
        </DashboardValue>
        <DashboardValue label="Progreso">0%</DashboardValue>
      </div>
    </div>
  );
};

export default Dashboard;
