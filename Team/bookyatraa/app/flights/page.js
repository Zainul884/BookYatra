"use client";
import React from 'react';
import Link from 'next/link';


const FlightPage = () => {
	return (<div className="relative w-[1440px] h-[3442px] bg-[#fff] overflow-hidden">
  <div className="absolute left-[26px] top-[897px] w-[418px] h-[69px] text-[57px] font-['Inter'] text-[#000]">Flights</div>
  <div className="absolute left-[23px] top-[1333px] w-[568px] h-[69px] text-[57px] font-['Inter'] text-[#000]">Popular Destinations</div>
  <div className="absolute left-[43px] top-[2243px] w-[1150px] h-[378px] flex">
    <div className="absolute left-[584px] top-[128px] w-[563px] h-[124px] bg-[#fff] border-[1px] border-solid border-[#000] rounded-[30px]"></div>
    <div className="absolute left-[579px] top-0 w-[571px] h-[117px] bg-[#fff] border-[1px] border-solid border-[#000] rounded-[30px]"></div>
    <div className="absolute left-0 top-[137px] w-[531px] h-[106px] bg-[#fff] border-[1px] border-solid border-[#000] rounded-[30px]"></div>
    <div className="absolute left-0 top-0 w-[531px] h-[123px] bg-[#fff] border-[1px] border-solid border-[#000] rounded-[30px]"></div>
    <div className="absolute left-[12px] top-[15px] w-[508px] h-[85px] flex">
      <div className="absolute left-0 top-0 w-[305px] h-[23px] text-[20px] font-['Inter'] font-medium text-[#000]">Book in Advance:</div>
      <div className="absolute left-[16px] top-[34px] w-[492px] text-[14px] font-['Inter'] text-[#000]">Generally, booking your flights well in advance can help you get better rates. Aim to book your flights at least a few weeks ahead of your planned travel date.</div>
    </div>
    <div className="absolute left-[9px] top-[144px] w-[522px] h-[124px] flex">
      <div className="absolute left-0 top-0 w-[305px] h-[22px] text-[20px] font-['Inter'] font-medium text-[#000]">Consider Connecting Flights</div>
      <div className="absolute left-[30px] top-[27px] w-[492px] h-[97px] text-[14px] font-['Inter'] text-[#000]">Choose a hotel that is conveniently located near the attractions or business centers you plan to visit. BookYatra offers maps and local guides to assist with your selection.<br/><br/></div>
    </div>
    <div className="absolute left-0 top-[268px] w-[531px] h-[110px] flex">
      <div className="absolute left-0 top-0 w-[531px] h-[108px] bg-[#fff] border-[1px] border-solid border-[#000] rounded-[30px]"></div>
      <div className="absolute left-[9px] top-[14px] w-[522px] h-[96px] flex">
        <div className="absolute left-0 top-0 w-[330px] h-[23px] text-[20px] font-['Inter'] font-medium text-[#000]">Consider Booking Round Trips</div>
        <div className="absolute left-[30px] top-[28px] w-[492px] text-[14px] font-['Inter'] text-[#000]">Round trip tickets are often cheaper than one-way tickets. If your travel plans are set, booking a round trip might save you money<br/><br/></div>
      </div>
    </div>
    <div className="absolute left-[602px] top-[144px] w-[501px] h-[115px] flex">
      <div className="absolute left-0 top-0 w-[305px] h-[23px] text-[20px] font-['Inter'] font-medium text-[#000]">Early Bird or Last Minute?</div>
      <div className="absolute left-[9px] top-[30px] w-[492px] text-[14px] font-['Inter'] text-[#000]">Evaluate the best time to book. While booking early often secures the best rates, last-minute bookings can sometimes offer unexpected deals. BookYatra updates its deals regularly to cater to both types of travelers.<br/><br/></div>
    </div>
    <div className="absolute left-[596px] top-[15px] w-[522px] h-[79px] flex">
      <div className="absolute left-0 top-0 w-[305px] h-[23px] text-[20px] font-['Inter'] font-medium text-[#000]">Be Flexible with Dates</div>
      <div className="absolute left-[30px] top-[28px] w-[492px] text-[14px] font-['Inter'] text-[#000]">If possible, have flexible travel dates. Sometimes flying a day earlier or later can significantly reduce the cost. Use BookYatra's flexible date search feature to compare prices across different dates.</div>
    </div>
  </div>
  <img className="absolute left-0 top-[127px]" width="1440" height="537" src="./Images Capstone/Flight Page Image.jpg"></img>
  <div className="absolute left-[126px] top-[551px] w-[1232px] flex flex-col items-end justify-center gap-[32px] pt-[32px] px-[24px] pb-[48px] bg-[#fff] border-[0px] border-solid border-[#000] rounded-[16px]">
    <div className="self-stretch text-[20px] font-['Inter'] font-semibold text-[#121]">Where are you flying? </div>
    <div className="self-stretch flex flex-row items-center justify-start gap-[24px]">
      <div className="flex-1 h-[56px] flex flex-col items-start justify-start rounded-tl-[4px] rounded-tr-[4px] rounded-br-0 rounded-bl-0">
        <div className="self-stretch flex flex-col items-start justify-start bg-[#fff] border-[1px] border-solid border-[#79747e] rounded-[4px]">
          <div className="self-stretch flex flex-row items-center justify-start pt-[4px] pr-0 pb-[4px] pl-[16px] rounded-tl-[4px] rounded-tr-[4px] rounded-br-0 rounded-bl-0">
            <div className="relative flex-1 h-[40px] flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-start">
                <div className="text-[16px] font-['Inter'] text-[#1c1b1f] whitespace-nowrap">Calgary - Mumbai</div>
              </div>
              <div className="absolute left-[-4px] top-[-16px] flex flex-row items-center justify-start py-0 px-[4px] bg-[#fff]">
                <div className="text-[14px] font-['Inter'] text-[#121] whitespace-nowrap">From - To</div>
              </div>
            </div>
            <div className="w-[48px] h-[48px] shrink-0 flex flex-col items-center justify-center p-[12px]">
              <img width="24" height="24" src="./Images Capstone/vector.png"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[140px] h-[56px] shrink-0 flex flex-col items-start justify-start rounded-tl-[4px] rounded-tr-[4px] rounded-br-0 rounded-bl-0">
        <div className="self-stretch flex flex-col items-start justify-start bg-[#fff] border-[1px] border-solid border-[#79747e] rounded-[4px]">
          <div className="self-stretch flex flex-row items-center justify-start pt-[4px] pr-0 pb-[4px] pl-[16px] rounded-tl-[4px] rounded-tr-[4px] rounded-br-0 rounded-bl-0">
            <div className="relative flex-1 h-[40px] flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-start">
                <div className="text-[16px] font-['Inter'] text-[#1c1b1f] whitespace-nowrap">Return</div>
              </div>
              <div className="absolute left-[-4px] top-[-16px] flex flex-row items-center justify-start py-0 px-[4px] bg-[#fff]">
                <div className="text-[14px] font-['Inter'] text-[#121] whitespace-nowrap">Trip</div>
              </div>
            </div>
            <div className="w-[48px] h-[48px] shrink-0 flex flex-col items-center justify-center p-[12px]">
              <img width="24" height="24" src="./Images Capstone/vector.png"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 h-[56px] flex flex-col items-start justify-start rounded-tl-[4px] rounded-tr-[4px] rounded-br-0 rounded-bl-0">
        <div className="self-stretch flex flex-col items-start justify-start bg-[#fff] border-[1px] border-solid border-[#79747e] rounded-[4px]">
          <div className="w-[210px] flex flex-row items-center justify-start pt-[8px] pr-0 pb-[8px] pl-[16px] rounded-tl-[4px] rounded-tr-[4px] rounded-br-0 rounded-bl-0">
            <div className="relative flex-1 h-[40px] flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-start">
                <div className="text-[16px] font-['Inter'] text-[#1c1b1f] whitespace-nowrap">13 Feb 24 - 15 Feb 24</div>
              </div>
              <div className="absolute left-[-4px] top-[-16px] flex flex-row items-center justify-start py-0 px-[4px] bg-[#fff]">
                <div className="text-[14px] font-['Inter'] text-[#1c1b1f] whitespace-nowrap">Depart- Return</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 h-[56px] flex flex-col items-start justify-start rounded-tl-[4px] rounded-tr-[4px] rounded-br-0 rounded-bl-0">
        <div className="self-stretch flex flex-col items-start justify-start bg-[#fff] border-[1px] border-solid border-[#79747e] rounded-[4px]">
          <div className="self-stretch flex flex-row items-center justify-start pt-[8px] pr-0 pb-[8px] pl-[16px] rounded-tl-[4px] rounded-tr-[4px] rounded-br-0 rounded-bl-0">
            <div className="relative flex-1 h-[40px] flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-start">
                <div className="text-[16px] font-['Inter'] text-[#1c1b1f] whitespace-nowrap">1 Passenger, Economy</div>
              </div>
              <div className="absolute left-[-4px] top-[-16px] flex flex-row items-center justify-start py-0 px-[4px] bg-[#fff]">
                <div className="text-[14px] font-['Inter'] text-[#1c1b1f] whitespace-nowrap">Passenger - Class</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch flex flex-row items-center justify-end">
      <div className="flex flex-col items-start justify-start">
        <div className="h-[48px] shrink-0 flex flex-row items-center justify-center gap-[4px] py-[8px] px-[16px] bg-[#1d9bf0] rounded-[4px]">
          <img width="16" height="16" src="./Images Capstone/vector.png"></img>
          <div className="text-[14px] font-['Inter'] font-medium text-[#fff] whitespace-nowrap">Show Filghts</div>
        </div>
      </div>
    </div>
  </div>
  <div className="absolute left-[32px] top-[1500px] flex flex-col items-center justify-start">
    <img width="296" height="420" src="./Images Capstone/Popular Destinations For Flight Page.jpg"></img>
    <div className="absolute left-[24px] top-[286px] flex flex-col items-start justify-start gap-[16px]">
      <div className="flex flex-row items-end justify-end gap-[2px]">
        <div className="w-[177px] shrink-0 flex flex-col items-start justify-start">
          <div className="self-stretch text-[24px] font-['Inter'] font-semibold text-[#fff]">Paris</div>
          <div className="self-stretch text-[14px] font-['Inter'] text-[#fff]">A Paris Adventure</div>
        </div>
        <div className="text-[24px] font-['Montserrat'] font-semibold text-[#fff] whitespace-nowrap">$ 600</div>
      </div>
      <div className="w-[248px] flex flex-col items-start justify-start">
        <div className="self-stretch h-[48px] shrink-0 flex flex-row items-center justify-center py-[8px] px-[16px] bg-[#fff] rounded-[4px]">
          <div className="text-[14px] font-['Inter'] font-medium text-[#121] whitespace-nowrap">Book a Flight</div>
        </div>
      </div>
    </div>
  </div>
  <div className="absolute left-[362px] top-[1500px] flex flex-col items-center justify-start">
    <img width="296" height="420" src="./Images Capstone/Popular Destinations For Flight Page.jpg"></img>
    <div className="absolute left-[24px] top-[286px] flex flex-col items-start justify-start gap-[16px]">
      <div className="flex flex-row items-end justify-end gap-[2px]">
        <div className="w-[177px] shrink-0 flex flex-col items-start justify-start">
          <div className="self-stretch text-[24px] font-['Inter'] font-semibold text-[#fff]">Paris</div>
          <div className="self-stretch text-[14px] font-['Inter'] text-[#fff]">A Paris Adventure</div>
        </div>
        <div className="text-[24px] font-['Montserrat'] font-semibold text-[#fff] whitespace-nowrap">$ 600</div>
      </div>
      <div className="w-[248px] flex flex-col items-start justify-start">
        <div className="self-stretch h-[48px] shrink-0 flex flex-row items-center justify-center py-[8px] px-[16px] bg-[#fff] rounded-[4px]">
          <div className="text-[14px] font-['Inter'] font-medium text-[#121] whitespace-nowrap">Book a Flight</div>
        </div>
      </div>
    </div>
  </div>
  <div className="absolute left-[697px] top-[1500px] flex flex-col items-center justify-start">
    <img width="296" height="420" src="./Images Capstone/Popular Destinations For Flight Page.jpg"></img>
    <div className="absolute left-[24px] top-[286px] flex flex-col items-start justify-start gap-[16px]">
      <div className="flex flex-row items-end justify-end gap-[2px]">
        <div className="w-[177px] shrink-0 flex flex-col items-start justify-start">
          <div className="self-stretch text-[24px] font-['Inter'] font-semibold text-[#fff]">Paris</div>
          <div className="self-stretch text-[14px] font-['Inter'] text-[#fff]">A Paris Adventure</div>
        </div>
        <div className="text-[24px] font-['Montserrat'] font-semibold text-[#fff] whitespace-nowrap">$ 600</div>
      </div>
      <div className="w-[248px] flex flex-col items-start justify-start">
        <div className="self-stretch h-[48px] shrink-0 flex flex-row items-center justify-center py-[8px] px-[16px] bg-[#fff] rounded-[4px]">
          <div className="text-[14px] font-['Inter'] font-medium text-[#121] whitespace-nowrap">Book a Flight</div>
        </div>
      </div>
    </div>
  </div>
  <div className="absolute left-[1063px] top-[1500px] flex flex-col items-center justify-start">
    <img width="296" height="420" src="./Images Capstone/Popular Destinations For Flight Page.jpg"></img>
    <div className="absolute left-[24px] top-[286px] flex flex-col items-start justify-start gap-[16px]">
      <div className="flex flex-row items-end justify-end gap-[2px]">
        <div className="w-[177px] shrink-0 flex flex-col items-start justify-start">
          <div className="self-stretch text-[24px] font-['Inter'] font-semibold text-[#fff]">Paris</div>
          <div className="self-stretch text-[14px] font-['Inter'] text-[#fff]">A Paris Adventure</div>
        </div>
        <div className="text-[24px] font-['Montserrat'] font-semibold text-[#fff] whitespace-nowrap">$ 600</div>
      </div>
      <div className="w-[248px] flex flex-col items-start justify-start">
        <div className="self-stretch h-[48px] shrink-0 flex flex-row items-center justify-center py-[8px] px-[16px] bg-[#fff] rounded-[4px]">
          <div className="text-[14px] font-['Inter'] font-medium text-[#121] whitespace-nowrap">Book a Flight</div>
        </div>
      </div>
    </div>
  </div>
  <div className="absolute left-[49px] top-[2078px] w-[1077px] h-[124px] text-[43px] font-['Inter'] text-[#000]"><br/>Tips for Booking a Flight with BookYatra<br/><br/></div>
  <div className="absolute left-[-33px] top-[2778px] w-[1473px] h-[240px] flex">
    <div className="absolute left-0 top-[40px] w-[944px] h-[200px] flex">
      <div className="absolute left-0 top-0 w-[944px] h-[64px] flex">
        <div className="absolute left-0 top-0 w-[354px] h-[63px] flex">
          <div className="absolute left-[95px] top-[2px] w-[259px] h-[61px] flex">
            <div className="absolute left-0 top-0 w-[259px] h-[61px] text-[57px] font-['Judson'] text-[#000]">BookYatra</div>
          </div>
          <div className="absolute left-[95px] top-[2px] w-[259px] h-[61px] flex">
            <div className="absolute left-0 top-0 w-[259px] h-[61px] text-[57px] font-['Judson'] text-[#000]">BookYatra</div>
          </div>
          <div className="absolute left-0 top-0 w-[158px] h-[51px] text-[59px] font-['Judson'] text-[#000] text-center">#</div>
        </div>
        <div className="absolute left-[401px] top-[25px] w-[143px] h-[34px] text-[29px] font-['Inter'] text-[#000]">Explore</div>
        <div className="absolute left-[575px] top-[29px] w-[143px] h-[34px] text-[29px] font-['Inter'] text-[#000]">Follow Us</div>
        <div className="absolute left-[801px] top-[30px] w-[143px] h-[34px] text-[29px] font-['Inter'] text-[#000]">Legal</div>
      </div>
      <div className="absolute left-[401px] top-[80px] w-[59px] h-[30px] text-[18px] font-['Inter'] text-[#000]">Flights</div>
      <div className="absolute left-[801px] top-[82px] w-[119px] h-[30px] text-[18px] font-['Inter'] text-[#000]">Terms of Use</div>
      <div className="absolute left-[403px] top-[110px] w-[59px] h-[30px] text-[18px] font-['Inter'] text-[#000]">Hotels</div>
      <div className="absolute left-[401px] top-[140px] w-[83px] h-[30px] text-[18px] font-['Inter'] text-[#000]">About Us</div>
      <div className="absolute left-[401px] top-[170px] w-[75px] h-[30px] text-[18px] font-['Inter'] text-[#000]">FAQs</div>
      <img className="absolute left-[570px] top-[70px]" width="28" height="28" src="./Images Capstone/fb.png"></img>
      <img className="absolute left-[613px] top-[70px]" width="28" height="28" src="./Images Capstone/Insta.png"></img>
      <img className="absolute left-[663px] top-[70px]" width="28" height="28" src="./Images Capstone/Twitter.png"></img>
    </div>
    <div className="absolute left-[33px] top-[0px] w-[1440px] h-0 border-[1px] border-solid border-[#000]"></div>
  </div>

  <div className="flights">
      <header className="header">
        <div className="header-content">
          <img src="./Images Capstone/LOGO without bg.png" alt="logo" className="logo-home" />
          <nav className="homenavigation">
            <Link href="./homepage"className="link">Home</Link>
            <Link href="./hotel" className="link">Hotel</Link>
            <Link href="./flights"className="link">Flights</Link>
            <Link href="./login" className="link">Login</Link>
            <Link href="./signup" className="link">Sign Up</Link>
          </nav>
        </div>
        <hr className="line"></hr>
      </header>
  </div>    
  <div className="absolute left-[7px] top-[1006px] w-[690px] h-[244px] flex">
    <div className="absolute left-0 top-0 w-[690px] h-[244px] flex">
      <div className="absolute left-0 top-0 w-[690px] h-[244px] bg-[#fff] border-[1px] border-solid border-[#000] rounded-[25px]"></div>
      <div className="absolute left-[460px] top-[97px] w-[93px] h-[30px] text-[16px] font-['Inter'] text-[#000]">India</div>
      <div className="absolute left-[34px] top-[69px] w-[162px] h-[86px] text-[40px] font-['Inter'] text-[#000]">Calgary</div>
      <div className="absolute left-[460px] top-[152px] w-[163px] h-[42px] text-[40px] font-['Junge'] text-[#000]">$ 2489/</div>
      <div className="absolute left-[284px] top-[74px] w-[162px] h-[49px] text-[40px] font-['Inter'] text-[#000]">Mumbai</div>
      <div className="absolute left-[40px] top-[127px] w-[93px] h-[23px] text-[16px] font-['Inter'] text-[#000]">RoundTrip</div>
      <div className="absolute left-[592px] top-[173px] w-[84px] h-[21px] text-[15px] font-['Inter'] text-[#000]">Per Person</div>
      <div className="absolute left-[40px] top-[179px] w-[93px] h-[23px] text-[16px] font-['Inter'] text-[#000]">Dates :</div>
      <div className="absolute left-[40px] top-[201px] w-[118px] h-[23px] text-[16px] font-['Inter'] text-[#000]">Feb13 - Feb 15</div>
    </div>
    <img className="absolute left-[40px] top-[6px]" width="122" height="68" src="image 4350_1997.png"></img>
    <img className="absolute left-[30.28%] right-[62.48%] top-[30.6%] bottom-[51.64%]" width="50" height="43" src="Vector50_1998.png"></img>
    <div className="absolute left-[503px] top-[204px] w-[106px] h-[26px] flex">
      <div className="absolute left-0 top-0 w-[106px] h-[26px] bg-[#1d9bf0] rounded-[5px]"></div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-[calc(50%+-6px)] top-[calc(50%+2px)] w-[68px] h-[20px] text-[13px] font-['Inter'] font-medium text-[#fff]">Book Now</div>
      <img className="absolute -translate-y-1/2 right-[5px] top-1/2" width="12" height="12" src="Icon67_354.png"></img>
    </div>
  </div>
  <div className="absolute left-[720px] top-[1006px] w-[708px] h-[250px] flex">
    <div className="absolute left-0 top-0 w-[708px] h-[250px] flex">
      <div className="absolute left-0 top-0 w-[708px] h-[250px] bg-[#fff] border-[1px] border-solid border-[#000] rounded-[26px]"></div>
      <div className="absolute left-[473px] top-[99px] w-[95px] h-[31px] text-[17px] font-['Inter'] text-[#000]">India</div>
      <div className="absolute left-[35px] top-[70px] w-[166px] h-[88px] text-[41px] font-['Inter'] text-[#000]">Calgary</div>
      <div className="absolute left-[473px] top-[156px] w-[166px] h-[88px] text-[41px] font-['Junge'] text-[#000]">$ 2888/</div>
      <div className="absolute left-[292px] top-[76px] w-[166px] h-[51px] text-[41px] font-['Inter'] text-[#000]">Mumbai</div>
      <div className="absolute left-[41px] top-[130px] w-[95px] h-[23px] text-[17px] font-['Inter'] text-[#000]">RoundTrip</div>
      <div className="absolute left-[608px] top-[178px] w-[87px] h-[21px] text-[15px] font-['Junge'] text-[#000]">Per Person</div>
      <div className="absolute left-[41px] top-[184px] w-[95px] h-[23px] text-[17px] font-['Inter'] text-[#000]">Dates :</div>
      <div className="absolute left-[41px] top-[207px] w-[121px] h-[23px] text-[17px] font-['Inter'] text-[#000]">Feb13 - Feb 15</div>
    </div>
    <img className="absolute left-[29.93%] right-[63.01%] top-[30.75%] bottom-[51.95%]" width="50" height="43" src="Vector50_1999.png"></img>
    <div className="absolute left-[533px] top-[210px] w-[106px] h-[26px] flex">
      <div className="absolute left-0 top-0 w-[106px] h-[26px] bg-[#1d9bf0] rounded-[5px]"></div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-[calc(50%+-6px)] top-[calc(50%+2px)] w-[68px] h-[20px] text-[13px] font-['Inter'] font-medium text-[#fff]">Book Now</div>
      <img className="absolute -translate-y-1/2 right-[5px] top-1/2" width="12" height="12" src="Icon70_358.png"></img>
    </div>
  </div>
</div>)
}

export default FlightPage