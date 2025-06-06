function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">About This Starter Kit</h2>
        <p className="text-xl text-muted-foreground">
          Everything you need to build modern web applications
        </p>
      </div>
      
      <div className="prose prose-lg mx-auto">
        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-2">Frontend</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• React 18+ with TypeScript</li>
                <li>• Vite for blazing fast development</li>
                <li>• React Router for navigation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Styling</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Tailwind CSS v4</li>
                <li>• shadcn/ui component library</li>
                <li>• Dark/light mode support</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>TypeScript support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Hot module replacement</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Path aliases (@/)</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Component library ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Responsive design</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Modern CSS with Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

