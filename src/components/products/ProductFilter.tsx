import { ProductCategory } from '../../types/product';

interface ProductFilterProps {
  selectedCategory: ProductCategory | 'all';
  onCategoryChange: (category: ProductCategory | 'all') => void;
}

const ProductFilter = ({ selectedCategory, onCategoryChange }: ProductFilterProps) => {
  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'slim', label: 'Slim Fit Jeans' },
    { value: 'straight', label: 'Straight Fit Jeans' },
    { value: 'baggy', label: 'Baggy Jeans' },
    { value: 'jacket', label: 'Denim Jackets' },
  ];

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value as ProductCategory | 'all')}
            className={`px-4 py-2 rounded-full transition-colors duration-200 ${
              selectedCategory === category.value
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-600 hover:bg-indigo-50'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;