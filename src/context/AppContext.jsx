import { createContext, useEffect, useState } from "react";

// إنشاء الكونتكست العام
const AppContext = createContext();

// المزود العام (Provider)
const AppProvider = ({ children }) => {
  // 🎯 هنا تقدر تضيف أي state أو دوال عامة لكل المشروع

  // مثال: حالة المودال
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // مثال: السلة (Cart)
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // تحميل المستخدم من localStorage عند التحميل
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) setCurrentUser(user);
  }, []);

  // تسجيل الدخول: حفظ المستخدم في localStorage وفي state
  const login = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    setCurrentUser(user);
  };

  // تسجيل الخروج
  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };
  // ➕ إضافة منتج للكارت
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // 🔺 زيادة الكمية
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // 🔻 تقليل الكمية
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  // ❌ حذف منتج
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 🔄 مسح السلة كلها
  const clearCart = () => {
    setCartItems([]);
  };
  

  // Wishlist Functions
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) return prev; // لا تضيف عنصر موجود مسبقًا
      return [...prev, product];
    });
  };
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };
  const clearWishlist = () => setWishlist([]);

  // كل القيم التي تريدها متاحة هنا
  const value = {
    // Modal
    openModal,
    handleOpenModal,
    handleCloseModal,

    // Cart
    cartItems,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,

    // Wishlist
    wishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,

    // User
    login,
    logout,
    currentUser,
    setCurrentUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// هوك مخصص للاستخدام بسهولة في أي مكان
export { AppContext, AppProvider };
