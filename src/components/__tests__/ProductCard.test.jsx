import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect, vi } from "vitest";
import ProductCard from "../ProductCard";

describe("ProductCard", () => {
  test("renders product information", () => {
    const product = {
      name: "Test Product",
      category: "electronics",
      price: 99,
      image: "test.jpg",
      badge: "new",
      description: "A test product",
    };

    render(
      <ProductCard
        product={product}
        onAddToCart={vi.fn()}
      />
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("electronics")).toBeInTheDocument();
    expect(screen.getByText("$99")).toBeInTheDocument();
    expect(screen.getByText("A test product")).toBeInTheDocument();
  });

  test("calls onAddToCart when Add to cart is clicked", () => {
    const product = {
      name: "Test Product",
      category: "electronics",
      price: 99,
      image: "test.jpg",
      description: "A test product",
    };

    const onAddToCart = vi.fn();

    render(
      <ProductCard
        product={product}
        onAddToCart={onAddToCart}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Add to cart" }));

    expect(onAddToCart).toHaveBeenCalledWith(product);
  });
});
