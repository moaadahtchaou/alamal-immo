import { useState } from "react";


import { Search } from "lucide-react";

export default function RentBuy() {
    const [activeTab, setActiveTab] = useState("Buy");

  return (
    <div className=" relative z-10   bg-primary">
      <div className=" container max-w-4xl text-background space-y-6 py-24 mx-auto ">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Find Your Dream Home Today</h1>
        <p className="text-lg md:text-xl text-background/60">
          Discover the perfect property that matches your lifestyle and preferences with our extensive listings
          and expert guidance.
        </p>
        <div className="bg-background/10 backdrop-blur-md rounded-xl p-4 mt-8">
          <div >
            <div className="grid w-full grid-cols-3 mb-4 bg-primary rounded-md p-1 tabs-list h-10 ">
              <button 
                  className={`text-sm text-center rounded-md  ${activeTab === "Buy" ? 'bg-background text-primary' : ' text-background/60 hover:bg-primary-foreground/5'} `}
                  onClick={() =>setActiveTab("Buy") }
                >Buy</button>
                                <button 
                  className={`text-sm text-center rounded-md ${activeTab === "Rent" ? 'bg-background text-primary' : ' text-background/60 hover:bg-primary-foreground/5'}`}
                  onClick={() =>setActiveTab("Rent") }
                >Rent</button>
                                <button 
                  className={`text-sm text-center rounded-md ${activeTab === "Sell" ? 'bg-background text-primary' : ' text-background/60 hover:bg-primary-foreground/5'}`}
                  onClick={() =>setActiveTab("Sell") }
                >Sell</button>
            </div>
          {
            activeTab==="Buy" ?
            (               
            <div key={'Buy'}  className="space-y-4 tabs-content">
              <div  className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    placeholder="Location"
                    className="buyrentsell"
                  />
                </div>
                <div className="flex-1">
                  <input
                    placeholder="Property Type"
                    className="buyrentsell"
                  />
                </div>
                <div className="flex-1">
                  <input
                    placeholder="Price Range"
                    className="buyrentsell"
                  />
                </div>
                <button className="buyrentsellsearch text-background">
                  <Search className="h-4 w-4" />
                  Search
                </button>
              </div>
            </div>)
            :
            activeTab === "Rent" ?
              
            (
              <div  key={'Rent'} className="space-y-4 tabs-content">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    placeholder="Location"
                    className="buyrentsell"
                  />
                </div>
                <div className="flex-1">
                  <input
                    placeholder="Property Type"
                    className="buyrentsell"
                  />
                </div>
                <div className="flex-1">
                  <input
                    placeholder="Monthly Rent"
                    className="buyrentsell"
                  />
                </div>
                <button className="buyrentsellsearch text-background">
                  <Search className="h-4 w-4" />
                  Search
                </button>
              </div>
            </div>
            )
            :
              ( <div key={'Sell'} className="space-y-4 tabs-content">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      placeholder="Property Address"
                      className="buyrentsell"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      placeholder="Property Type"
                      className="buyrentsell"
                    />
                  </div>
                  <button className="buyrentsellsearch text-background">Get Estimate</button>
                </div>
              </div>)
          }

          
          </div>
        </div>
      </div>
  </div>
  )
}
