
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="mx-auto max-w-md">
          <h1 className="text-9xl font-bold text-telegram mb-4">404</h1>
          <p className="text-xl mb-8">
            Страница не найдена. Возможно, она была удалена или адрес был введен неправильно.
          </p>
          <Link to="/">
            <Button>
              <Home className="mr-2 h-5 w-5" /> На главную
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
