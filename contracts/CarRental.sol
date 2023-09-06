// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CarRental {
    struct Reservation {
        address renter;
        string carType;
        uint256 pickUpDate;
        uint256 dropOffDate;
        bool confirmed;
    }

    Reservation[] public reservations;
    uint256 public reservationCount;

    event CarBooked(address indexed renter, string carType, uint256 pickUpDate, uint256 dropOffDate);
    event ReservationConfirmed(uint256 indexed reservationId);
    event ReservationCanceled(uint256 indexed reservationId);

    constructor() {
        reservationCount = 0;
    }

    function bookCar(
        string memory _carType,
        uint256 _pickUpDate,
        uint256 _dropOffDate
    ) external {
        reservations.push(Reservation(msg.sender, _carType, _pickUpDate, _dropOffDate, false));
        reservationCount++;
        emit CarBooked(msg.sender, _carType, _pickUpDate, _dropOffDate);
    }

    function confirmReservation(uint256 _reservationId) external {
        require(_reservationId < reservationCount, "Invalid reservation ID");
        Reservation storage reservation = reservations[_reservationId];
        require(msg.sender == reservation.renter, "Only the renter can confirm");

        reservation.confirmed = true;
        emit ReservationConfirmed(_reservationId);
    }

    function cancelReservation(uint256 _reservationId) external {
        require(_reservationId < reservationCount, "Invalid reservation ID");
        Reservation storage reservation = reservations[_reservationId];
        require(msg.sender == reservation.renter, "Only the renter can cancel");

        delete reservations[_reservationId];
        emit ReservationCanceled(_reservationId);
    }

    function getReservation(uint256 _reservationId)
        external
        view
        returns (
            address renter,
            string memory carType,
            uint256 pickUpDate,
            uint256 dropOffDate,
            bool confirmed
        )
    {
        require(_reservationId < reservationCount, "Invalid reservation ID");
        Reservation storage reservation = reservations[_reservationId];
        return (
            reservation.renter,
            reservation.carType,
            reservation.pickUpDate,
            reservation.dropOffDate,
            reservation.confirmed
        );
    }
}
