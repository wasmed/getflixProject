
package com.example.dto;

import com.example.entity.Films;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import java.io.FileReader;
import java.util.List;





public class DataService {
    
 /* public static void main(String[] args) throws Exception {
      
    String fileName = "src/main/resources/static/Data_1.csv";
    FileReader reader = new FileReader(fileName);

    CsvToBean<Films> csvToBean = new CsvToBeanBuilder<Films>(reader)
        .withType(Films.class)
        .withIgnoreLeadingWhiteSpace(true)
        .build();

    List<Films> list = csvToBean.parse();

    for (Films entity : list) {
      System.out.println(entity.toString());
    }

    reader.close();
  }*/
  
     
}
