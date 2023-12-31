﻿




CREATE TABLE ТоварНаСкладе (
 primaryKey UUID NOT NULL,
 Количество VARCHAR(255) NULL,
 НомерЯчейки VARCHAR(255) NULL,
 Ряд VARCHAR(255) NULL,
 Этаж VARCHAR(255) NULL,
 Склад UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Склад (
 primaryKey UUID NOT NULL,
 Адрес VARCHAR(255) NULL,
 Номер INT NULL,
 Сотрудник UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудник (
 primaryKey UUID NOT NULL,
 Email VARCHAR(255) NULL,
 Имя VARCHAR(255) NULL,
 Отчество VARCHAR(255) NULL,
 ТабельныйНомер INT NULL,
 Телефон VARCHAR(255) NULL,
 Фамилия VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Накладная (
 primaryKey UUID NOT NULL,
 Вес DOUBLE PRECISION NULL,
 ДатаОтгрузки TIMESTAMP(3) NULL,
 Примечание VARCHAR(255) NULL,
 Статус VARCHAR(16) NULL,
 Сумма DOUBLE PRECISION NULL,
 ФИОПолучателя VARCHAR(255) NULL,
 ДатаЗаполнения TIMESTAMP(3) NULL,
 Номер INT NULL,
 Сотрудник UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОбщаяяДокументация (
 primaryKey UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЗаписьВНакладной (
 primaryKey UUID NOT NULL,
 Вес DOUBLE PRECISION NULL,
 Количество INT NULL,
 Сумма DOUBLE PRECISION NULL,
 Цена DOUBLE PRECISION NULL,
 Накладная UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЗаявкаНаТовара (
 primaryKey UUID NOT NULL,
 ОбщаяяДокументация UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СтрокаЗаказа (
 primaryKey UUID NOT NULL,
 Количество INT NULL,
 НДС DOUBLE PRECISION NULL,
 Сумма DOUBLE PRECISION NULL,
 Заказ UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Товар (
 primaryKey UUID NOT NULL,
 ЕдиницаИзмерения VARCHAR(255) NULL,
 КодТовара INT NULL,
 Название VARCHAR(255) NULL,
 Описания VARCHAR(255) NULL,
 Цена DOUBLE PRECISION NULL,
 ЗаписьВНакладной UUID NOT NULL,
 СтрокаЗаказа UUID NOT NULL,
 ТоварНаСкладе UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Заказ (
 primaryKey UUID NOT NULL,
 ДатаОплаты TIMESTAMP(3) NULL,
 ДатаОтгрузки TIMESTAMP(3) NULL,
 Статус VARCHAR(10) NULL,
 Цена DOUBLE PRECISION NULL,
 ДатаЗаполнения TIMESTAMP(3) NULL,
 Номер INT NULL,
 Сотрудник UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Документ (
 primaryKey UUID NOT NULL,
 ДатаЗаполнения TIMESTAMP(3) NULL,
 Номер INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ТоварНаСкладе ADD CONSTRAINT FK68cdd071f8f3c1def6a6830da38eab96386d73e3 FOREIGN KEY (Склад) REFERENCES Склад; 
CREATE INDEX Index68cdd071f8f3c1def6a6830da38eab96386d73e3 on ТоварНаСкладе (Склад); 

 ALTER TABLE Склад ADD CONSTRAINT FKdc7ddeaf9706c0b85c1ee835e7f09aca269b12d7 FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Indexdc7ddeaf9706c0b85c1ee835e7f09aca269b12d7 on Склад (Сотрудник); 

 ALTER TABLE Накладная ADD CONSTRAINT FKfcaa653e2d6bfdc7fe6070fb20a566f1dcdb9530 FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Indexfcaa653e2d6bfdc7fe6070fb20a566f1dcdb9530 on Накладная (Сотрудник); 

 ALTER TABLE ЗаписьВНакладной ADD CONSTRAINT FKf96379bd836142091424e2323e057156bc53f217 FOREIGN KEY (Накладная) REFERENCES Накладная; 
CREATE INDEX Indexf96379bd836142091424e2323e057156bc53f217 on ЗаписьВНакладной (Накладная); 

 ALTER TABLE ЗаявкаНаТовара ADD CONSTRAINT FK05dabc777a90f42a4b987f9546110042084c2d33 FOREIGN KEY (ОбщаяяДокументация) REFERENCES ОбщаяяДокументация; 
CREATE INDEX Index05dabc777a90f42a4b987f9546110042084c2d33 on ЗаявкаНаТовара (ОбщаяяДокументация); 

 ALTER TABLE СтрокаЗаказа ADD CONSTRAINT FK60ca6c2aec1cf64e9da289fe444bd695f79792d1 FOREIGN KEY (Заказ) REFERENCES Заказ; 
CREATE INDEX Index60ca6c2aec1cf64e9da289fe444bd695f79792d1 on СтрокаЗаказа (Заказ); 

 ALTER TABLE Товар ADD CONSTRAINT FKa93601abb94f7c2e6aa013b00e079065b1df1d46 FOREIGN KEY (ЗаписьВНакладной) REFERENCES ЗаписьВНакладной; 
CREATE INDEX Indexa93601abb94f7c2e6aa013b00e079065b1df1d46 on Товар (ЗаписьВНакладной); 

 ALTER TABLE Товар ADD CONSTRAINT FK98cffe455b6e5a44f4769c8095e48ffc149ba95d FOREIGN KEY (СтрокаЗаказа) REFERENCES СтрокаЗаказа; 
CREATE INDEX Index98cffe455b6e5a44f4769c8095e48ffc149ba95d on Товар (СтрокаЗаказа); 

 ALTER TABLE Товар ADD CONSTRAINT FK6150952b95c7b135cc747e77be94d341d13851ac FOREIGN KEY (ТоварНаСкладе) REFERENCES ТоварНаСкладе; 
CREATE INDEX Index6150952b95c7b135cc747e77be94d341d13851ac on Товар (ТоварНаСкладе); 

 ALTER TABLE Заказ ADD CONSTRAINT FK57e4c0dbcbc3ff7aab471a01fe0c325cfcc94c3c FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Index57e4c0dbcbc3ff7aab471a01fe0c325cfcc94c3c on Заказ (Сотрудник); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

