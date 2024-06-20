<%-- 
    Document   : issuelogScreen
    Created on : 14-Mar-2024, 10:43:07 am
    Author     : VENKI
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<div>
    <form id="issue_log_form">
        <fieldset>
          <!-- <legend>Issue Log</legend> -->
          <div class="form-group">
            <label for="date">Date:</label>
            <input type="date" id="date" name="clDate" value="2024-02-22" required>
          </div>
          <div class="form-group">
            <label for="issueDate">Issue claw Date:</label>
            <input type="date" name="issueDate" value="2024-02-16" required>
          </div>
          <div class="form-group">
            <label for="moduleinput">Issue Module:</label>
            <input type="text" name="module" id="moduleinput" list="moduleList" onfocusout="doValidate()" required>
            <datalist id="moduleList">
              </datalist>
          </div>
          <div class="form-group">
            <label for="requestType">Type Of Request:</label>
            <select name="requestType" id="requestType" required>
              <option value="Request">Request</option>
              <option value="Issue">Issue</option>
              <option value="Enhancement">Enhancement</option>
            </select>
          </div>
          <div class="form-group">
            <label for="catagiry">Application Catagory:</label>
            <select name="catagiry" class="selectOption" id="catagiry" required>
              <option value="DCT">DCT</option>
              <option value="Pre Migration">Pre Migration</option>
              <option value="ERP">ERP</option>
            </select>
          </div>
          <div class="form-group">
            <label for="districtinput">District:</label>
            <input type="text" name="district" id="districtinput" list="districtList" required>
            <datalist id="districtList">
              <option value="erode">Chennai</option>
              </datalist>
          </div>
          <div class="form-group">
            <label for="pacsCodeInput">Pacs Name:</label>
            <input type="text" name="pacsCode" id="pacsCodeInput" onfocusout="doValidatePacs()" list="pacsCodes" required>
            <datalist id="pacsCodes">
              </datalist>
          </div>
          <div class="form-group">
            <label for="issueDescreptionTextarea">Issue description:</label>
            <textarea name="issueDescreption" id="issueDescreptionTextarea" required></textarea>
          </div>
          <div class="form-group">
            <input type="submit" value="Submit" onclick="createCallLog()">
            <input type="reset" value="Reset">
          </div>
        </fieldset>
      </form>
    
</div>