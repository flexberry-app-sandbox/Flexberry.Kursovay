﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovay
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Накладная.
    /// </summary>
    // *** Start programmer edit section *** (Накладная CustomAttributes)

    // *** End programmer edit section *** (Накладная CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("НакладнаяE", new string[] {
            "Примечание as \'Примечание\'",
            "Сумма as \'Сумма\'",
            "ДатаОтгрузки as \'Дата отгрузки\'",
            "Вес as \'Вес\'",
            "Статус as \'Статус\'",
            "ФИОПолучателя as \'Ф и о получателя\'"})]
    [AssociatedDetailViewAttribute("НакладнаяE", "ЗаписьВНакладной", "ЗаписьВНакладнойE", true, "", "Запись в накладной", true, new string[] {
            ""})]
    [View("НакладнаяL", new string[] {
            "Примечание as \'Примечание\'",
            "Сумма as \'Сумма\'",
            "ДатаОтгрузки as \'Дата отгрузки\'",
            "Вес as \'Вес\'",
            "Статус as \'Статус\'",
            "ФИОПолучателя as \'Ф и о получателя\'"})]
    public class Накладная : IIS.Kursovay.Документ
    {
        
        private string fПримечание;
        
        private double fСумма;
        
        private System.DateTime fДатаОтгрузки;
        
        private double fВес;
        
        private IIS.Kursovay.СостояниеНакладной fСтатус;
        
        private string fФИОПолучателя;
        
        private IIS.Kursovay.Сотрудник fМатериальноОтветственноеЛицо;
        
        private IIS.Kursovay.DetailArrayOfЗаписьВНакладной fЗаписьВНакладной;
        
        // *** Start programmer edit section *** (Накладная CustomMembers)

        // *** End programmer edit section *** (Накладная CustomMembers)

        
        /// <summary>
        /// Вес.
        /// </summary>
        // *** Start programmer edit section *** (Накладная.Вес CustomAttributes)

        // *** End programmer edit section *** (Накладная.Вес CustomAttributes)
        public virtual double Вес
        {
            get
            {
                // *** Start programmer edit section *** (Накладная.Вес Get start)

                // *** End programmer edit section *** (Накладная.Вес Get start)
                double result = this.fВес;
                // *** Start programmer edit section *** (Накладная.Вес Get end)

                // *** End programmer edit section *** (Накладная.Вес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Накладная.Вес Set start)

                // *** End programmer edit section *** (Накладная.Вес Set start)
                this.fВес = value;
                // *** Start programmer edit section *** (Накладная.Вес Set end)

                // *** End programmer edit section *** (Накладная.Вес Set end)
            }
        }
        
        /// <summary>
        /// ДатаОтгрузки.
        /// </summary>
        // *** Start programmer edit section *** (Накладная.ДатаОтгрузки CustomAttributes)

        // *** End programmer edit section *** (Накладная.ДатаОтгрузки CustomAttributes)
        public virtual System.DateTime ДатаОтгрузки
        {
            get
            {
                // *** Start programmer edit section *** (Накладная.ДатаОтгрузки Get start)

                // *** End programmer edit section *** (Накладная.ДатаОтгрузки Get start)
                System.DateTime result = this.fДатаОтгрузки;
                // *** Start programmer edit section *** (Накладная.ДатаОтгрузки Get end)

                // *** End programmer edit section *** (Накладная.ДатаОтгрузки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Накладная.ДатаОтгрузки Set start)

                // *** End programmer edit section *** (Накладная.ДатаОтгрузки Set start)
                this.fДатаОтгрузки = value;
                // *** Start programmer edit section *** (Накладная.ДатаОтгрузки Set end)

                // *** End programmer edit section *** (Накладная.ДатаОтгрузки Set end)
            }
        }
        
        /// <summary>
        /// Примечание.
        /// </summary>
        // *** Start programmer edit section *** (Накладная.Примечание CustomAttributes)

        // *** End programmer edit section *** (Накладная.Примечание CustomAttributes)
        [StrLen(255)]
        public virtual string Примечание
        {
            get
            {
                // *** Start programmer edit section *** (Накладная.Примечание Get start)

                // *** End programmer edit section *** (Накладная.Примечание Get start)
                string result = this.fПримечание;
                // *** Start programmer edit section *** (Накладная.Примечание Get end)

                // *** End programmer edit section *** (Накладная.Примечание Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Накладная.Примечание Set start)

                // *** End programmer edit section *** (Накладная.Примечание Set start)
                this.fПримечание = value;
                // *** Start programmer edit section *** (Накладная.Примечание Set end)

                // *** End programmer edit section *** (Накладная.Примечание Set end)
            }
        }
        
        /// <summary>
        /// Статус.
        /// </summary>
        // *** Start programmer edit section *** (Накладная.Статус CustomAttributes)

        // *** End programmer edit section *** (Накладная.Статус CustomAttributes)
        public virtual IIS.Kursovay.СостояниеНакладной Статус
        {
            get
            {
                // *** Start programmer edit section *** (Накладная.Статус Get start)

                // *** End programmer edit section *** (Накладная.Статус Get start)
                IIS.Kursovay.СостояниеНакладной result = this.fСтатус;
                // *** Start programmer edit section *** (Накладная.Статус Get end)

                // *** End programmer edit section *** (Накладная.Статус Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Накладная.Статус Set start)

                // *** End programmer edit section *** (Накладная.Статус Set start)
                this.fСтатус = value;
                // *** Start programmer edit section *** (Накладная.Статус Set end)

                // *** End programmer edit section *** (Накладная.Статус Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (Накладная.Сумма CustomAttributes)

        // *** End programmer edit section *** (Накладная.Сумма CustomAttributes)
        public virtual double Сумма
        {
            get
            {
                // *** Start programmer edit section *** (Накладная.Сумма Get start)

                // *** End programmer edit section *** (Накладная.Сумма Get start)
                double result = this.fСумма;
                // *** Start programmer edit section *** (Накладная.Сумма Get end)

                // *** End programmer edit section *** (Накладная.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Накладная.Сумма Set start)

                // *** End programmer edit section *** (Накладная.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (Накладная.Сумма Set end)

                // *** End programmer edit section *** (Накладная.Сумма Set end)
            }
        }
        
        /// <summary>
        /// ФИОПолучателя.
        /// </summary>
        // *** Start programmer edit section *** (Накладная.ФИОПолучателя CustomAttributes)

        // *** End programmer edit section *** (Накладная.ФИОПолучателя CustomAttributes)
        [StrLen(255)]
        public virtual string ФИОПолучателя
        {
            get
            {
                // *** Start programmer edit section *** (Накладная.ФИОПолучателя Get start)

                // *** End programmer edit section *** (Накладная.ФИОПолучателя Get start)
                string result = this.fФИОПолучателя;
                // *** Start programmer edit section *** (Накладная.ФИОПолучателя Get end)

                // *** End programmer edit section *** (Накладная.ФИОПолучателя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Накладная.ФИОПолучателя Set start)

                // *** End programmer edit section *** (Накладная.ФИОПолучателя Set start)
                this.fФИОПолучателя = value;
                // *** Start programmer edit section *** (Накладная.ФИОПолучателя Set end)

                // *** End programmer edit section *** (Накладная.ФИОПолучателя Set end)
            }
        }
        
        /// <summary>
        /// Накладная.
        /// </summary>
        // *** Start programmer edit section *** (Накладная.МатериальноОтветственноеЛицо CustomAttributes)

        // *** End programmer edit section *** (Накладная.МатериальноОтветственноеЛицо CustomAttributes)
        [PropertyStorage(new string[] {
                "МатериальноОтветственноеЛицо"})]
        [NotNull()]
        public virtual IIS.Kursovay.Сотрудник МатериальноОтветственноеЛицо
        {
            get
            {
                // *** Start programmer edit section *** (Накладная.МатериальноОтветственноеЛицо Get start)

                // *** End programmer edit section *** (Накладная.МатериальноОтветственноеЛицо Get start)
                IIS.Kursovay.Сотрудник result = this.fМатериальноОтветственноеЛицо;
                // *** Start programmer edit section *** (Накладная.МатериальноОтветственноеЛицо Get end)

                // *** End programmer edit section *** (Накладная.МатериальноОтветственноеЛицо Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Накладная.МатериальноОтветственноеЛицо Set start)

                // *** End programmer edit section *** (Накладная.МатериальноОтветственноеЛицо Set start)
                this.fМатериальноОтветственноеЛицо = value;
                // *** Start programmer edit section *** (Накладная.МатериальноОтветственноеЛицо Set end)

                // *** End programmer edit section *** (Накладная.МатериальноОтветственноеЛицо Set end)
            }
        }
        
        /// <summary>
        /// Накладная.
        /// </summary>
        // *** Start programmer edit section *** (Накладная.ЗаписьВНакладной CustomAttributes)

        // *** End programmer edit section *** (Накладная.ЗаписьВНакладной CustomAttributes)
        public virtual IIS.Kursovay.DetailArrayOfЗаписьВНакладной ЗаписьВНакладной
        {
            get
            {
                // *** Start programmer edit section *** (Накладная.ЗаписьВНакладной Get start)

                // *** End programmer edit section *** (Накладная.ЗаписьВНакладной Get start)
                if ((this.fЗаписьВНакладной == null))
                {
                    this.fЗаписьВНакладной = new IIS.Kursovay.DetailArrayOfЗаписьВНакладной(this);
                }
                IIS.Kursovay.DetailArrayOfЗаписьВНакладной result = this.fЗаписьВНакладной;
                // *** Start programmer edit section *** (Накладная.ЗаписьВНакладной Get end)

                // *** End programmer edit section *** (Накладная.ЗаписьВНакладной Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Накладная.ЗаписьВНакладной Set start)

                // *** End programmer edit section *** (Накладная.ЗаписьВНакладной Set start)
                this.fЗаписьВНакладной = value;
                // *** Start programmer edit section *** (Накладная.ЗаписьВНакладной Set end)

                // *** End programmer edit section *** (Накладная.ЗаписьВНакладной Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "НакладнаяE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НакладнаяE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НакладнаяE", typeof(IIS.Kursovay.Накладная));
                }
            }
            
            /// <summary>
            /// "НакладнаяL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НакладнаяL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НакладнаяL", typeof(IIS.Kursovay.Накладная));
                }
            }
        }
    }
}
