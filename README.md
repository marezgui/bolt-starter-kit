# 🚀 Bolt Starter Kit

A modern React starter kit with Vite, TypeScript, Tailwind CSS, shadcn/ui, and React Router - perfect for building modern web applications.

## ✨ Features

- ⚡ **Vite** - Lightning fast build tool and dev server
- ⚛️ **React 18+** - Latest React with TypeScript support
- 🎨 **Tailwind CSS v4** - Modern utility-first CSS framework
- 🎭 **shadcn/ui** - Beautiful, accessible component library
- 🧭 **React Router** - Declarative routing for React
- 📝 **TypeScript** - Full type safety
- 🔧 **Path Aliases** - Clean imports with `@/` prefix
- 🌙 **Dark Mode** - Built-in dark/light theme support

## 🚀 Quick Start

1. **Clone or download this starter kit**
   ```bash
   git clone <your-repo-url> my-app
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   └── ui/             # shadcn/ui components
├── lib/                # Utility functions
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Adding Components

This starter kit comes with shadcn/ui pre-configured. Add new components with:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add input
npx shadcn@latest add dialog
npx shadcn@latest add table
```

## 📚 Usage Examples

### Adding a New Page

1. Create a new component in `src/pages/`:
   ```tsx
   // src/pages/NewPage.tsx
   function NewPage() {
     return (
       <div>
         <h1>New Page</h1>
         <p>Content goes here...</p>
       </div>
     )
   }
   
   export default NewPage
   ```

2. Add the route in `App.tsx`:
   ```tsx
   import NewPage from './pages/NewPage'
   
   // In your Routes component:
   <Route path="/new-page" element={<NewPage />} />
   ```

3. Add navigation link:
   ```tsx
   <Link to="/new-page">New Page</Link>
   ```

### Using shadcn/ui Components

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

## 🎯 Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Routing**: React Router
- **Icons**: Lucide React (via shadcn/ui)

## 📄 License

MIT License - feel free to use this starter kit for your projects!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Happy coding!** 🎉
