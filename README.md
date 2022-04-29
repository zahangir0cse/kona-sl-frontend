# Google map

## Google map api key

    AIzaSyBebHxv0TAvEui-oTwWyjODuraQ2QaYQXU

# Libraries

## angular-cli-ghpages

    url: https://www.npmjs.com/package/angular-cli-ghpages

### Commands

To install

    npm i angular-cli-ghpages --save-dev

To build

    ng build --prod --base-href "/"˜

To publish

    npx ngh

or

Deploy:

ng build --prod --base-href "/" 
npx ngh --dir dist/hotelswave-front-end --no-silent --repo=git@github.com:nazmuldipu/hotelswave-front-end.git


bug :

//TODO:

# 06-03-2019

1. room list pagination [done]
2. discount map room list pagination [done]
3. Hotel Image cash [done]
4. Selected room color at sell room page [done]
5. Super admin reservation filter [done]

# 07-03-2019

6. Cancel Booking

# 09-03-2019

6. Cancel Booking (cont)

# 10-03-2019

6. Cancel Booking (cont)[done]

   1. Cancel Booking for Admin
   2. Cancel Booking for Service Admin
   3. Cancel Booking for Admin Agent
   4. Cancel Booking for Service Admin Agent
   5. Cancel booking for user

# 11-03-2019

7. Report reservation list problem [done]
8. Create your own package[done]

# 12-03-2019

9. Change similar category room discount map [done]
10. Sell room page edit with reserved/sell [done]
11. New tab Room Status by date at sell room page [done]

# 13-03-2019

12. Service Admin From Room status Map see booking / reservation details [done]
13. Remove bug from reservation reportn [done]
14. Service Admin reservation confirm and cancel [done]

# 14-03-2019

14. Admin From Room status Map see booking / reservation details [done]
15. Admin confirm reservation [done]
16. Admin cancel reservation [done]

17. Change similar category room status map
18. Room Details payable amount problem
19. Super admin change multiple room status at onec
20. Hotel Search option city
21. Make reservation as like booking
22. Invoice
23. Package image remove on edit
24. Front page package name increase font size, type font size decrease, add tag line
25. Page details page hide info if not available
26. Dashboard list of booked packegs.
27. Link tours to Tours list page

App Requirement: 1. Web page 2. App in android and ios both

title, tag, des, duration, tourdate, last booking date, discount, link, price,

udpate 20191016
    1) Search list into hotel list and category list
    2) Room and category pic are removed while updating category or room , solve this
    3) Discount map is not working
    4) hotel disable problem
    5) Show category info while selling the room
    6) Show category option while updating room
    
update 20191017
    1) Room discount map -> count latest map
    2) Booking 

update 20191029
    1) Category list on Discount map
    2) Discount map maximum date should be 365 days
    3) Hotel search list on dashboar hotel list, 
    4) Login page type phone number instead of username
    5) Admin Agent hotel search

update 20191107
    1) booking table responsive
    2) Promotion dashboard
    3) Print booking

update 20191112
    1) Hotel agent discount
    2) Hotelswave agent percent
    3) Change ooops page to current page with message
    4) Admin hotel report customer information
    5) Report reservation -> Today's Status

update 20191118
    1) On Sells change category advance and discount
    2) Admin agent fixed percent


update
    1) Front default date for 1 day instead of 4 days    

Update 20201204:

[X] Admin should be able to change/update user name
[X] Admin should be able to change user password and user also would be able to.
[X] Invoice should show counter info.
[X] Super Admin should be able to control user roles
[X] Generate Counter Report
[X] Cancel Report
[X] Report list filter by Sold, Reserve, Cancel
[X] Booking report and Invoice => Issued By
[X] /user/assign-user: User hotels and role control
[X] /add-hotel: remove compare links
[X] /add-hotel: Add hotel type to Eco Resort, Banglo
[X] /add-hotel: Hotel Start level Eco Resort, Banglo
[X] /accounting: remove add income and add expenses
[X] send confirmation sms for each booking confirmation
[X] Add cancel by to booking report 
[X] Report Date Next and previous option
[X] /invoice: Don't show price
[X] /report Counter Report by Date for [SHIP, HOTEL, BUS, AIR, TOUR]
[X] /report Counter Report by Duration for [SHIP, HOTEL, BUS, AIR, TOUR]
[X] /accounts Accountant Receive Cash From counter
[X] /accounts Accountant manual add [Refund, Office Rent, Stationary, Petty Cash, Advance, Ship balance, Bus Balance, Snacks, Celebration, Product Purchase, Investment] (order by a->z)
[X] /sells Manual Add sales for [HOTEL, SHIP, AIR, BUS, TOUR]
[X] /report Cancel Report for hotels
[X] /user Hotel user remove agent/admin
[X] /room discount map: change by category
[X] /add-hotel: alternate phone number
[] /report: with commission
[X] /sell: payment method, payment ref
[X] /offlinebooking: can remove bookings
[X] /add status on custom packages
[] /status on booking cancel, add cancelletion fee manually
[X] /hotels: search box: label checink and checkout date
[X] /sells: one hotel sell at a time
[X] /room Vat and service charge should be in hotel instead of room
[X] /sell status: on reservation : reserved by
[X] /sell : sms option for customer and hotel
[X] Agent Report: list automatic report
[X] Hotel facility: barber shop, pet allowed, kids zone, sea side, hill side, tour desk, locker, welcome drinks, fruit basket, bbq zone, conference hall, rent a car, airport pickup and drop
[X] /sell: with breakfast optional

[] Manual booking -> Add commission
[] Counter role: Sales -> All Hotel, can discount, my sells report, can cancell, can create agent, package, special offer, refund requst
[] Account Role: Agent balance, Receive Counter money, can access report, accounting, refund validate

Reports: 
[] Type
[] Company
[] Date
[] Counter
[] Income
[] Expense




[]SHIP : AGent report 
[]SHIP: /admin/report/sells: bottom col :  Reserve | SOLD  | amount | Hotelswave Commission | Hotelswave Agent Commission	| Ship Agent Commission

*Refund and return according to company policy. For details  https://www.hotelswave.com/returnRefund


[]imart: inventory conversion
[]itours: Tour: [code, date, destination, guest info {name, phone, email}, duration, total cost, profit, note ]


try{}catch(err){console.log(err)}