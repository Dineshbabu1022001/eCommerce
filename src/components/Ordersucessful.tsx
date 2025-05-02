// components/OrderConfirmationModal.tsx
import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";
import { buyItem } from "./store/cartSlice";
import { useDispatch } from "react-redux";

const OrderConfirmationModal: React.FC = () => {
  const orderId = Date.now().toString();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleProdNavi() {
    dispatch(buyItem());
    navigate("/products");
  }

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded-xl shadow-xl w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-white hover:text-gray-300"
          // No onClick handler since props are removed
        >
          ✕
        </button>
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="text-green-500 w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">
            Your order is confirmed!
          </h2>
          <p className="text-gray-300 mb-6">
            Your order <span className="font-bold text-white">#{orderId}</span>{" "}
            will be processed within 24 hours during working days. We will
            notify you by email once your order has been shipped.
          </p>
          <div className="flex gap-4 w-full justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium">
              Track your order
            </button>
            <button
              onClick={handleProdNavi}
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-white font-medium"
            >
              Return to shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
