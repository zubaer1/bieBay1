DROP DATABASE IF EXISTS bieBay;
CREATE DATABASE bieBay;

USE bieBay;

CREATE TABLE custOrder(
  Id INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(45) NULL,

  stockQuantity int(45) NULL,
  itemId int,
  FOREIGN KEY (itemId) REFERENCES products(itemId),
  PRIMARY KEY (Id)
);

# INSERT INTO custOrder (productName,  stockQuantity, itemId)
#	VALUES ("Laptop", 10, 1),
#		   ("Laptop",  10, 2);

-- ========================================
INSERT INTO custOrder (productName,  stockQuantity, itemId)
    VALUES ('Laptop', 10, 1),
    	   ('Desktop', 10, 2),
    		('Processor', 10, 3),
    		( 'Motherboard',10, 4),
    		('RAM', 10, 5),
          	('PowerSupply', 10, 6),
          	('Sound card', 10, 7),
          	('Hard drive', 10, 8),
          	('Video card', 10, 9),
          	('Flash drive', 10, 10);

-- ========================================




 USE bieBay;

CREATE TABLE products(
  itemId INT NOT NULL AUTO_INCREMENT,
  departmentName VARCHAR(45) NULL,
  price int(45) NULL,
  autoGraphed Boolean NULL,
  PRIMARY KEY (itemId)
);

INSERT INTO products (departmentName, price, autoGraphed)
	VALUES ("Computer", 300,  false),
		   ("Computer", 300, true);