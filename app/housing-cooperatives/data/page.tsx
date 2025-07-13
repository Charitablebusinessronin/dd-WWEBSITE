export default function HousingDataPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark-gray mb-4">Housing Cooperatives Data Dashboard</h1>
          <p className="text-gray-600">
            Comprehensive data visualizations showing the impact and potential of community-owned housing cooperatives.
          </p>
        </div>

        {/* Embed the HTML visualization */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="/housing-data-viz.html"
            width="100%"
            height="800"
            frameBorder="0"
            title="Housing Cooperatives Data Visualizations"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
