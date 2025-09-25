import React from 'react'
import Banner from '@/components/Banner'
import ShippingExchangePolicyContent from '@/components/shipping/ShippingExchangePolicyContent'
import TableOfContents from '@/components/shipping/TableOfContents'

const ShippingExchangePolicyPage = () => {
  return (
    <div className='min-h-screen'>
      {/* Banner Section */}
      <Banner
        heading="Shipping and Exchange Policy"
        subtitle="Learn about our digital delivery and exchange terms"
      />

      {/* Main Content */}
      <div className='max-w-[1536px] mx-auto'>
        <div className="flex gap-8 px-4 py-8">
          {/* Sidebar - Table of Contents (Desktop) */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <TableOfContents />
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            {/* Mobile Table of Contents */}
            <div className="lg:hidden mb-6">
              <TableOfContents />
            </div>

            <div className="bg-white rounded-4xl shadow-sm">
              <ShippingExchangePolicyContent />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default ShippingExchangePolicyPage
