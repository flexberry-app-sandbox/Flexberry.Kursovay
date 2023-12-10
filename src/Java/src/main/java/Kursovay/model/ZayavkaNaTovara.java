package Kursovay.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovay.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ЗаявкаНаТовара
 */
@Entity(name = "IISKursovayЗаявкаНаТовара")
@Table(schema = "public", name = "ЗаявкаНаТовара")
public class ZayavkaNaTovara {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ObshhayayaDokumentaciya")
    @Convert("ObshhayayaDokumentaciya")
    @Column(name = "ОбщаяяДокументация", length = 16, unique = true, nullable = false)
    private UUID _obshhayayadokumentaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ObshhayayaDokumentaciya", insertable = false, updatable = false)
    private ObshhayayaDokumentaciya obshhayayadokumentaciya;


    public ZayavkaNaTovara() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}