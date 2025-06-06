import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Bolt Starter Kit</h2>
        <p className="text-xl text-muted-foreground mb-8">
          A modern React starter with Vite, TypeScript, Tailwind CSS, shadcn/ui, and React Router
        </p>
      </div>
      
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Counter Example</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-3xl font-mono">{count}</div>
              <Button onClick={() => setCount(count + 1)}>
                Increment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <Card>
          <CardHeader>
            <CardTitle>⚡ Vite</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Lightning fast build tool and dev server</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>⚛️ React + TypeScript</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Modern React with full TypeScript support</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>🎨 Tailwind + shadcn/ui</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Beautiful UI components with utility-first CSS</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home

