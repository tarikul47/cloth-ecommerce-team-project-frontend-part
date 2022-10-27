import React from "react";
import CatagoryDisplays from "../../components/CatagoryDisplays/CatagoryDisplays";
import Layout from "../../components/Layout";
import Promotionals from "../../components/Promotionals/Promotionals";

const Categoryslug = () => {
  const promotionals = [
    {
      name: " Grab the season",
      image:
        "https://img.freepik.com/free-psd/editable-turtleneck-t-shirt-mockup-psd-men-rsquo-s-casual-business-fashion-ad_53876-138385.jpg?w=1380&t=st=1666795321~exp=1666795921~hmac=152e335952b6fb5a33aeb55a33585433ef2dbb769d1e0b2325a43234bdf32205",
    },
    {
      name: "Hurry up!",
      image:
        "https://img.freepik.com/free-psd/editable-men-s-t-shirt-psd-mockup-black-gray-activewear-ad_53876-123296.jpg?w=1380&t=st=1666795196~exp=1666795796~hmac=a28eb393f03e451a13b75bb62804c15ca7c90f7862f8b991d8fdaa271534a46f",
    },
  ];
  return (
    <Layout>
           <section>
            <div class="container min-w-screen py-12">
                <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">

                    
                    <div class="lg:sticky lg:top-4">
                        <details open class="overflow-hidden rounded border border-gray-200">
                            <summary class="flex items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
                                <span class="text-sm font-medium"> Toggle Filters </span>

                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </summary>

                            <form class="border-t border-gray-200 lg:border-t-0">
                                <fieldset>
                                    <legend class="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                                        Catagories
                                    </legend>

                                    <div class="space-y-2 px-5 py-6">
                                        <div class="flex items-center">
                                            <input id="new-in" type="checkbox" name="type[new-in]"
                                                class="h-5 w-5 rounded border-gray-300" />

                                            <label for="new-in" class="ml-3 text-sm font-medium">
                                                New In
                                            </label>
                                        </div>

                                        <div class="flex items-center">
                                            <input id="shirts" type="checkbox" name="type[shirts]"
                                                class="h-5 w-5 rounded border-gray-300" />

                                            <label for="shirts" class="ml-3 text-sm font-medium">
                                                Shirts
                                            </label>
                                        </div>

                                        <div class="flex items-center">
                                            <input id="pants" type="checkbox" name="type[pants]"
                                                class="h-5 w-5 rounded border-gray-300" />

                                            <label for="pants" class="ml-3 text-sm font-medium">
                                                Pants
                                            </label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="panjabi" type="checkbox" name="type[panjabi]"
                                                class="h-5 w-5 rounded border-gray-300" />

                                            <label for="panjabi" class="ml-3 text-sm font-medium">
                                                Panjabi
                                            </label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="jeans" type="checkbox" name="type[jeans]"
                                                class="h-5 w-5 rounded border-gray-300" />

                                            <label for="jeans" class="ml-3 text-sm font-medium">
                                                Jeans
                                            </label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="suits" type="checkbox" name="type[suits]"
                                                class="h-5 w-5 rounded border-gray-300" />

                                            <label for="suits" class="ml-3 text-sm font-medium">
                                                Suits
                                            </label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="jackets" type="checkbox" name="type[jackets]"
                                                class="h-5 w-5 rounded border-gray-300" />

                                            <label for="jackets" class="ml-3 text-sm font-medium">
                                                Jackets
                                            </label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="tshirts" type="checkbox" name="type[tshirts]"
                                                class="h-5 w-5 rounded border-gray-300" />

                                            <label for="tshirts" class="ml-3 text-sm font-medium">
                                                T-shirts
                                            </label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="poloshirts" type="checkbox" name="type[poloshirts]"
                                                class="h-5 w-5 rounded border-gray-300" />

                                            <label for="poloshirts" class="ml-3 text-sm font-medium">
                                                Polo shirts
                                            </label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="sportswear" type="checkbox" name="type[sportswear]"
                                                class="h-5 w-5 rounded border-gray-300" />

                                            <label for="sportswear" class="ml-3 text-sm font-medium">
                                                Sportswear
                                            </label>
                                        </div>

                                        <div class="pt-2">
                                            <button type="button" class="text-xs text-gray-500 underline">
                                                Reset Catagories
                                            </button>
                                        </div>
                                    </div>
                                </fieldset>

                                <div>
                                    <fieldset>
                                        <legend class="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                                            Size
                                        </legend>

                                        <div class="space-y-2 px-5 py-6">
                                            <div class="flex items-center">
                                                <input id="sm" type="checkbox" name="age[sm]"
                                                    class="h-5 w-5 rounded border-gray-300" />

                                                <label for="sm" class="ml-3 text-sm font-medium">
                                                    sm
                                                </label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="md" type="checkbox" name="age[md]"
                                                    class="h-5 w-5 rounded border-gray-300" />

                                                <label for="md" class="ml-3 text-sm font-medium">
                                                    md
                                                </label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="lg" type="checkbox" name="age[lg]"
                                                    class="h-5 w-5 rounded border-gray-300" />

                                                <label for="lg" class="ml-3 text-sm font-medium">
                                                    lg
                                                </label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="xl" type="checkbox" name="age[xl]"
                                                    class="h-5 w-5 rounded border-gray-300" />

                                                <label for="xl" class="ml-3 text-sm font-medium">
                                                    xl
                                                </label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="xxl" type="checkbox" name="age[xxl]"
                                                    class="h-5 w-5 rounded border-gray-300" />

                                                <label for="xxl" class="ml-3 text-sm font-medium">
                                                    xxl
                                                </label>
                                            </div>

                                            <div class="pt-2">
                                                <button type="button" class="text-xs text-gray-500 underline">
                                                    Reset Size
                                                </button>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <div>
                                    <fieldset>
                                        <legend class="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                                            Color
                                        </legend>

                                        <div class="space-y-2 px-5 py-6">
                                            <div class="flex items-center">
                                                <input id="white" type="checkbox" name="age[white]"
                                                    class="h-5 w-5 rounded border-gray-300" />

                                                <label for="white" class="ml-3 text-sm font-medium">
                                                    White
                                                </label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="blue" type="checkbox" name="age[blue]"
                                                    class="h-5 w-5 rounded border-gray-300" />

                                                <label for="blue" class="ml-3 text-sm font-medium">
                                                    Blue
                                                </label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="green" type="checkbox" name="age[green]"
                                                    class="h-5 w-5 rounded border-gray-300" />

                                                <label for="green" class="ml-3 text-sm font-medium">
                                                    Green
                                                </label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="black" type="checkbox" name="age[black]"
                                                    class="h-5 w-5 rounded border-gray-300" />

                                                <label for="black" class="ml-3 text-sm font-medium">
                                                    Black
                                                </label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="gray" type="checkbox" name="age[gray]"
                                                    class="h-5 w-5 rounded border-gray-300" />

                                                <label for="gray" class="ml-3 text-sm font-medium">
                                                    Gray
                                                </label>
                                            </div>

                                            <div class="flex items-center">
                                                <input id="purple" type="checkbox" name="age[purple]"
                                                    class="h-5 w-5 rounded border-gray-300" />

                                                <label for="purple" class="ml-3 text-sm font-medium">
                                                    Purple
                                                </label>
                                            </div>

                                            <div class="pt-2">
                                                <button type="button" class="text-xs text-gray-500 underline">
                                                    Reset Color
                                                </button>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <div class="flex justify-between border-t border-gray-200 px-5 py-3">
                                    <button name="reset" type="button"
                                        class="rounded text-xs font-medium text-gray-600 underline">
                                        Reset All
                                    </button>

                                    <button name="commit" type="button"
                                        class="rounded bg-black px-5 py-3 text-xs font-medium text-white">
                                        Apply Filters
                                    </button>
                                </div>
                            </form>
                        </details>
                    </div>

                   
                    <div class="lg:col-span-3">
                        <div class="flex items-center justify-between">
                            <p class="text-sm text-gray-500">
                                <span class="hidden sm:inline"> Showing </span>
                                6 of 24 Products
                            </p>

                            <div class="ml-4">
                                <label for="SortBy" class="sr-only"> Sort </label>

                                <select id="SortBy" name="sort_by" class="rounded border-gray-100 text-sm">
                                    <option readonly>Sort</option>
                                    <option value="price-asc">Price, Low-High</option>
                                    <option value="price-desc">Price, High-Low</option>
                                </select>
                            </div>
                        </div>

                        <!-- Product grid start -->
                        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


                            <div class="border border-slate-100 shadow-lg">
                                <img class="w-full" alt=""
                                    src="https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80"
                                    class="-mt-3 h-96 w-full object-cover" />

                                <div class="flex items-center justify-between">
                                    <h3 class="mt-4 px-2 text-md font-medium text-slate-900">Mens casual shirt</h3>
                                </div>

                                <div class="mt-4 px-2 flex items-center justify-between font-bold">
                                    <p class="text-green-600">BDT <span class="sm:text-xs md:text-lg">1500</span></p>
                                    <p class="text-xs uppercase tracking-wide text-blue-600">6 Colors</p>
                                </div>

                                <button type="button"
                                    class="w-full items-center justify-center bg-black text-white px-8 py-3 mt-3">
                                    <span class="text-sm font-medium px-2"> View
                                        Details </span>
                                </button>
                            </div>

                            <div class="border border-slate-100 shadow-lg">
                                <img class="w-full" alt=""
                                    src="https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80"
                                    class="-mt-3 h-96 w-full object-cover" />

                                <div class="flex items-center justify-between">
                                    <h3 class="mt-4 px-2 text-md font-medium text-slate-900">Mens casual shirt</h3>
                                </div>

                                <div class="mt-4 px-2 flex items-center justify-between font-bold">
                                    <p class="text-green-600">BDT <span class="sm:text-xs md:text-lg">1500</span></p>
                                    <p class="text-xs uppercase tracking-wide text-blue-600">6 Colors</p>
                                </div>

                                <a href="/src/product-details.html">
                                    <button type="button"
                                        class="w-full items-center justify-center bg-black text-white px-8 py-3 mt-3">
                                        <span class="text-sm font-medium px-2"> View Details </span>
                                    </button>
                                </a>
                            </div>

                            <div class="border border-slate-100 shadow-lg">
                                <img class="w-full" alt=""
                                    src="https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80"
                                    class="-mt-3 h-96 w-full object-cover" />

                                <div class="flex items-center justify-between">
                                    <h3 class="mt-4 px-2 text-md font-medium text-slate-900">Mens casual shirt</h3>
                                </div>

                                <div class="mt-4 px-2 flex items-center justify-between font-bold">
                                    <p class="text-green-600">BDT <span class="sm:text-xs md:text-lg">1500</span></p>
                                    <p class="text-xs uppercase tracking-wide text-blue-600">6 Colors</p>
                                </div>

                                <button type="button"
                                    class="w-full items-center justify-center bg-black text-white px-8 py-3 mt-3">
                                    <span class="text-sm font-medium px-2"> View Details </span>
                                </button>
                            </div>

                            <div class="border border-slate-100 shadow-lg">
                                <img class="w-full" alt=""
                                    src="https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80"
                                    class="-mt-3 h-96 w-full object-cover" />

                                <div class="flex items-center justify-between">
                                    <h3 class="mt-4 px-2 text-md font-medium text-slate-900">Mens casual shirt</h3>
                                </div>

                                <div class="mt-4 px-2 flex items-center justify-between font-bold">
                                    <p class="text-green-600">BDT <span class="sm:text-xs md:text-lg">1500</span></p>
                                    <p class="text-xs uppercase tracking-wide text-blue-600">6 Colors</p>
                                </div>

                                <button type="button"
                                    class="w-full items-center justify-center bg-black text-white px-8 py-3 mt-3">
                                    <span class="text-sm font-medium px-2"> View Details </span>
                                </button>
                            </div>

                            <div class="border border-slate-100 shadow-lg">
                                <img class="w-full" alt=""
                                    src="https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80"
                                    class="-mt-3 h-96 w-full object-cover" />

                                <div class="flex items-center justify-between">
                                    <h3 class="mt-4 px-2 text-md font-medium text-slate-900">Mens casual shirt</h3>
                                </div>

                                <div class="mt-4 px-2 flex items-center justify-between font-bold">
                                    <p class="text-green-600">BDT <span class="sm:text-xs md:text-lg">1500</span></p>
                                    <p class="text-xs uppercase tracking-wide text-blue-600">6 Colors</p>
                                </div>

                                <button type="button"
                                    class="w-full items-center justify-center bg-black text-white px-8 py-3 mt-3">
                                    <span class="text-sm font-medium px-2"> View Details </span>
                                </button>
                            </div>

                            <div class="border border-slate-100 shadow-lg">
                                <img class="w-full" alt=""
                                    src="https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80"
                                    class="-mt-3 h-96 w-full object-cover" />

                                <div class="flex items-center justify-between">
                                    <h3 class="mt-4 px-2 text-md font-medium text-slate-900">Mens casual shirt</h3>
                                </div>

                                <div class="mt-4 px-2 flex items-center justify-between font-bold">
                                    <p class="text-green-600">BDT <span class="sm:text-xs md:text-lg">1500</span></p>
                                    <p class="text-xs uppercase tracking-wide text-blue-600">6 Colors</p>
                                </div>

                                <button type="button"
                                    class="w-full items-center justify-center bg-black text-white px-8 py-3 mt-3">
                                    <span class="text-sm font-medium px-2"> View Details </span>
                                </button>
                            </div>

                            <div class="border border-slate-100 shadow-lg">
                                <img class="w-full" alt=""
                                    src="https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80"
                                    class="-mt-3 h-96 w-full object-cover" />

                                <div class="flex items-center justify-between">
                                    <h3 class="mt-4 px-2 text-md font-medium text-slate-900">Mens casual shirt</h3>
                                </div>

                                <div class="mt-4 px-2 flex items-center justify-between font-bold">
                                    <p class="text-green-600">BDT <span class="sm:text-xs md:text-lg">1500</span></p>
                                    <p class="text-xs uppercase tracking-wide text-blue-600">6 Colors</p>
                                </div>

                                <button type="button"
                                    class="w-full items-center justify-center bg-black text-white px-8 py-3 mt-3">
                                    <span class="text-sm font-medium px-2"> View Details </span>
                                </button>
                            </div>

                            <div class="border border-slate-100 shadow-lg">
                                <img class="w-full" alt=""
                                    src="https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80"
                                    class="-mt-3 h-96 w-full object-cover" />

                                <div class="flex items-center justify-between">
                                    <h3 class="mt-4 px-2 text-md font-medium text-slate-900">Mens casual shirt</h3>
                                </div>

                                <div class="mt-4 px-2 flex items-center justify-between font-bold">
                                    <p class="text-green-600">BDT <span class="sm:text-xs md:text-lg">1500</span></p>
                                    <p class="text-xs uppercase tracking-wide text-blue-600">6 Colors</p>
                                </div>

                                <button type="button"
                                    class="w-full items-center justify-center bg-black text-white px-8 py-3 mt-3">
                                    <span class="text-sm font-medium px-2"> View Details </span>
                                </button>
                            </div>

                            <div class="border border-slate-100 shadow-lg">
                                <img class="w-full" alt=""
                                    src="https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80"
                                    class="-mt-3 h-96 w-full object-cover" />

                                <div class="flex items-center justify-between">
                                    <h3 class="mt-4 px-2 text-md font-medium text-slate-900">Mens casual shirt</h3>
                                </div>

                                <div class="mt-4 px-2 flex items-center justify-between font-bold">
                                    <p class="text-green-600">BDT <span class="sm:text-xs md:text-lg">1500</span></p>
                                    <p class="text-xs uppercase tracking-wide text-blue-600">6 Colors</p>
                                </div>

                                <button type="button"
                                    class="w-full items-center justify-center bg-black text-white px-8 py-3 mt-3">
                                    <span class="text-sm font-medium px-2"> View Details </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
  );
};

export default Categoryslug;
