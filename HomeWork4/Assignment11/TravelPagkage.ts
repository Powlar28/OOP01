abstract class TravelPackage {
  private _packageId: string;
  private _packageName: string;
  protected _basePrice: number;

  constructor(packageId: string, packageName: string, basePrice: number) {
    this._packageId = packageId;
    this._packageName = packageName;
    this._basePrice = basePrice;
  }

  abstract calculatePrice(people: number): number;

 getPackageName(): string { return this._packageName; } getPrice(): number { return this._basePrice; }
}

class OneDayTrip extends TravelPackage {
  calculatePrice(people: number): number {
    let basePrice = this._basePrice * people;

    if (people >= 5) {
      return basePrice - basePrice * 0.1;
    }

    return basePrice;
  }
}

class OvernightTrip extends TravelPackage {
  private _numberOfNights: number;

  constructor(
    packageId: string,
    packageName: string,
    basePrice: number,
    numberOfNights: number,
  ) {
    super(packageId, packageName, basePrice);

    this._numberOfNights = numberOfNights;
  }

  calculatePrice(people: number): number {
    let basePrice = this._basePrice * people * this._numberOfNights;

    if (this._numberOfNights >= 3) {
      return basePrice - basePrice * 0.15;
    }

    return basePrice;
  }
}

class Customer {
  private _customerId: string;
  private _name: string;
  private _phone: string;

  constructor(customerId: string, name: string, phone: string) {
    this._customerId = customerId;
    this._name = name;
    this._phone = phone;
  }
  getName(): string { return this._name; } getPhone(): string { return this._phone; }
}

class TravelAgency {
  private _packages: TravelPackage[] = [];

  addPackage(travelPackage: TravelPackage): void {
    this._packages.push(travelPackage);
  }
}

class BookingDetail {
  private _travelers: Customer[];
  constructor(travelers: Customer[]) {
    this._travelers = travelers;
  }
  getTravelers(): Customer[] {
    return this._travelers;
  }
}

class Booking {
  private _bookingId: string;
  private _customer: Customer;
  private _travelPackage: TravelPackage;
  private _bookingDetail: BookingDetail;
  constructor(
    bookingId: string,
    customer: Customer,
    travelPackage: TravelPackage,
    bookingDetail: BookingDetail,
  ) {
    this._bookingId = bookingId;
    this._customer = customer;
    this._travelPackage = travelPackage;
    this._bookingDetail = bookingDetail;
  }
  showBooking(): void {
    const travelers = this._bookingDetail.getTravelers();
    const totalPrice = this._travelPackage.calculatePrice(travelers.length);
    const travelerNames = travelers
      .map((customer) => customer.getName())
      .join(", ");
    console.log("===== Booking Detail =====");
    console.log(`Booking ID: ${this._bookingId}`);
    console.log(`Customer: ${this._customer.getName()}`);
    console.log(`Package: ${this._travelPackage.getPackageName()}`);
    console.log(`Travelers: ${travelers.length} (${travelerNames})`);
    console.log("----------------------------------");
    console.log(
      `Total Price (10% Disc): ${totalPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Baht`,
    );
  }
}

const customerList: Customer[] = [];

for (let i = 1; i <= 5; i++) {
  const customer = new Customer("Id" + i, "Name" + i, "Phone" + i);

  customerList.push(customer);
}

const pkg: TravelPackage = new OneDayTrip("T001", "Bangkok City Tour", 1500);
const bangkok: TravelPackage = new OneDayTrip(
  "T001",
  "Bangkok City Tour",
  1500,
);
const chiangMai: TravelPackage = new OvernightTrip(
  "T002",
  "Chiang Mai Trip",
  2500,
  3,
);
const agency = new TravelAgency();

console.log("===== Travel Packages =====");
console.log(`1. Bangkok City Tour (One-Day)`);
console.log(
  `Price: ${bangkok.getPrice().toLocaleString("en-US", { minimumFractionDigits: 2 })} Baht`,
);
console.log(`2. Chiang Mai Trip (Overnight - 3 Nights)`);
console.log(
  `Price: ${chiangMai.getPrice().toLocaleString("en-US", { minimumFractionDigits: 2 })} Baht`,
);


const bookingDetail = new BookingDetail(customerList);
const booking = new Booking("B001", customerList[1], bangkok, bookingDetail);
booking.showBooking();
