import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import CategorySkeleton from '../components/CategorySkeleton';

function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data: categorySlugs } = await axios.get('https://dummyjson.com/products/category-list');
        
        const categoryData = await Promise.all(
          categorySlugs.map(async (slug) => {
            const { data: productData } = await axios.get(`https://dummyjson.com/products/category/${slug}?limit=1`);
            return {
              slug,
              name: slug.replace(/-/g, ' '),
              image: productData.products[0]?.thumbnail || 'https://via.placeholder.com/100',
            };
          })
        );
        setCategories(categoryData);
      } catch (err) {
        console.error('Failed to fetch categories:', err);
      } finally {
        setCategoriesLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = selectedCategory
          ? `https://dummyjson.com/products/category/${selectedCategory}`
          : 'https://dummyjson.com/products';
        const { data } = await axios.get(url);
        setProducts(data.products);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="px-4">
      <div className="max-w-screen-xl mx-auto">
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-black border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;