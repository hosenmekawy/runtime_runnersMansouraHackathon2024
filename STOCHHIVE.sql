CREATE TABLE Products (
    ProductID SERIAL PRIMARY KEY,
    ProductName VARCHAR(255) NOT NULL,
    Weight DECIMAL(10, 2) NOT NULL,
    Quantity INT NOT NULL
);

CREATE TABLE Shelves (
    ShelfID SERIAL PRIMARY KEY,
    ShelfMaxWeight DECIMAL(10, 2) NOT NULL,
    CurrentWeight DECIMAL(10, 2) DEFAULT 0
);

CREATE TABLE ProductShelf (
    ProductShelfID SERIAL PRIMARY KEY,
    ProductID INT REFERENCES Products(ProductID) ON DELETE CASCADE,
    ShelfID INT REFERENCES Shelves(ShelfID) ON DELETE CASCADE,
    QuantityOnShelf INT NOT NULL
);

CREATE TABLE Factories (
    FactoryID SERIAL PRIMARY KEY,
    FactoryName VARCHAR(255) NOT NULL
);

CREATE TABLE FactoryProducts (
    FactoryProductID SERIAL PRIMARY KEY,
    FactoryID INT REFERENCES Factories(FactoryID) ON DELETE CASCADE,
    ProductID INT REFERENCES Products(ProductID) ON DELETE CASCADE
);

CREATE TABLE Notifications (
    NotificationID SERIAL PRIMARY KEY,
    Message TEXT NOT NULL,
    ProductID INT REFERENCES Products(ProductID) ON DELETE CASCADE,
    ShelfID INT REFERENCES Shelves(ShelfID) ON DELETE CASCADE,
    NotificationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
