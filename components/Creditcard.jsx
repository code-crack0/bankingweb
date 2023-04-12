import React from 'react'

const creditcard = () => {
  return (
    <div id="credit_card" class="rounded-lg shadow-lg p-6">
      <div class="text-gray-500 text-lg font-medium mb-4">Credit Card</div>
      <div class="p-7 px-9 flex flex-col justify-center items-center space-y-10">
        <div class="text-2xl text-white font-bold tracking-wide">
          1234<span class="ml-2">5678</span>
          <span class="ml-2">9012</span>
          <span class="ml-2">3456</span>
        </div>
        <div class="text-sm text-white font-medium">
          <div class="uppercase">Expires</div>
          <div class="mt-1">08/25</div>
        </div>
      </div>
    </div>
  );
}

export default creditcard