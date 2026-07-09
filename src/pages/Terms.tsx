import React from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div>
      <section className="dtlsban clearfix">
        <div className="dtlstext">
          <h2>Terms of Service</h2>
          <p>We are committed to delivering high-quality billing and invoicing solutions.</p>
          <ul className="tabs nav nav-tabs clearfix">
            <li><Link to="/"><span className="material-symbols-outlined">home</span></Link></li>
            <li><Link to="/terms">Terms</Link></li>
          </ul>
        </div>
        <div className="dtlsimg">
          <img src="images/banner-3.jpg" className="img-fluid" alt="" />
        </div>
      </section>

      <div className="privacy-plcy clearfix termsPge" style={{ padding: '40px 15px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2>Invoice HUB Terms Agreement</h2>
        <p>
          PLEASE READ THIS USER LICENSE AGREEMENT (THE “AGREEMENT”) CAREFULLY AS IT GOVERNS YOUR USE OF THE
          SOFTWARE AND SERVICES PROVIDED BY OFFICE HUB INC. BY USING THE SOFTWARE (AS DEFINED BELOW) YOU AGREE TO BE BOUND BY
          THESE TERMS AND CONDITIONS.
        </p>

        <div className="privacy-lst">
          <h4>Definitions.</h4>
          <p><b>1.1</b> “Administrator” shall mean a representative of the Customer (as defined in Section 1.4) with authority to designate additional Authorized Users and/or Administrators.</p>
          <p><b>1.2</b> “Authorized Users” means those individuals who are authorized by the Customer to use the Software and for whom the applicable license fees have been paid, as stated on the Ordering Document.</p>
          <p><b>1.3</b> “Content” shall mean any information uploaded or posted by Customer or Authorized Users to the Service and any information provided by Customer to Invoice HUB in connection with the Service, including, without limitation, information about Authorized Users.</p>
          <p><b>1.4</b> “Customer” means the legal entity that purchased the Software from Invoice HUB and on whose behalf it is used.</p>
          <p><b>1.5</b> “Documentation” means any supporting product help and technical specifications documentation provided to Customer by Invoice HUB with the Software.</p>
          <p><b>1.6</b> “Ordering Document” means the Invoice HUB purchase order form accompanying this license. The terms of such Ordering Document shall be deemed a part of this Agreement.</p>
          <p><b>1.7</b> “Service” means any support and maintenance service provided by Invoice HUB to Customer with regards to the Software.</p>
          <p><b>1.8</b> “Software” means the Invoice HUB software licensed by the Customer through the Ordering Document, including all related Documentation and details in the ordering Document.</p>
        </div>

        <div className="privacy-lst">
          <h4>Use of Software.</h4>
          <p>
            <b>2.1</b> <strong>License.</strong> Subject to all other terms and conditions of this Agreement and payment of the license fee designated in the Ordering Document, Invoice HUB grants Customer and Authorized Users a non-exclusive, non-transferable and non-sublicensable (except as provided in Section 2.2) license to use the Software. The total count of Authorized Users enabled to use the Software must not exceed the number of licenses purchased on the applicable Ordering Document(s).
          </p>
          <p>
            <b>2.2</b> <strong>Sublicense.</strong> Customer may sublicense access to the Software to its subcontractors on Customer's behalf and solely for Customer's direct beneficial purpose, provided that: (a) Customer is responsible for ensuring that any such subcontractor(s) agrees to abide by and fully comply with the terms of this Agreement as they relate to the use of the Software, on the same basis as applies to Customer; (b) such use does not represent or constitute an increase in the scope or number of licenses provided hereunder; and (c) Customer shall remain fully liable for any and all acts or omissions by the subcontractor(s) related to this Agreement.
          </p>
          <p>
            <b>2.3</b> <strong>Third Party Code.</strong> The Software may contain or be provided with components which are licensed from third parties (Third Party Code), including components subject to the terms and conditions of “open source” software licenses (Open Source Software). Open Source Software may be identified in the Documentation, or in a list of the Open Source Software provided to you upon your written request. To the extent required by the license that accompanies the Open Source Software, the terms of such license will apply in lieu of the terms of this Agreement with respect to such Open Source Software, including, without limitation, any provisions governing access to source code, modification or reverse engineering.
          </p>
        </div>

        <div className="privacy-lst">
          <h4>Restrictions.</h4>
          <p>
            <b>3.1</b> Customer and Authorized Users shall not (and shall not allow any third party to): (a) decompile, disassemble, or otherwise reverse engineer the Software or Third Party Code or attempt to reconstruct or discover any source code, underlying ideas, algorithms, file formats or programming interfaces of the Software or Third Party Code by any means whatsoever; (b) distribute, sell, sublicense, rent, lease or use the Software, or Third Party Code (or any portion thereof) for time sharing, hosting, service provider or like purposes, except as explicitly permitted under Section 2.2 of this Agreement; (c) remove any product identification, proprietary copyright, trademark, service mark, or other notices contained in the Software; (d) modify any part of the Software or Third Party Code, create a derivative work of any part of the Software or Third Party Code, or incorporate the Software or Third Party Code into or with other software; (e) utilize any equipment, device, software, or other means designed to circumvent or remove any form of copy protection used by Invoice HUB in connection with the Software, or use the Software together with any authorization code, serial number, or other copy protection device not supplied by Invoice HUB; (f) use the Software to develop a commercial product or service offering; (or g) use the Software to upload, post, host, or transmit unsolicited bulk email “Spam”, short message service “SMS” messages, viruses, self-replicating computer programs “Worms” or any code of a destructive or malicious nature.
          </p>
          <p>
            <b>3.2</b> Customer acknowledges that the Software is not intended for use with protected health information under HIPAA, credit card numbers, financial account numbers, or other similarly sensitive personal information, and that Customer assumes all risk arising from use of any such sensitive information with the System, including the risk of any inadvertent disclosure or unauthorized access thereto. Customer is responsible for ensuring that Customer and Authorized Users' use of the Software is in compliance with all applicable laws and governmental regulations and Customer acknowledges that Customer assumes all risk arising from any such use that is not compliant with applicable laws and regulations.
          </p>
        </div>

        <div className="privacy-lst">
          <h4>Ownership</h4>
          <p>
            Notwithstanding anything to the contrary contained herein, except for the limited license rights expressly provided herein, Invoice HUB and its licensors have and will retain all rights, title and interest (including, without limitation, all patent, copyright, trademark, trade secret and other intellectual property rights) in and to the Software, Third Party Code, and all copies, modifications and derivative works thereof (including any changes which incorporate any of your ideas, feedback or suggestions). Customer acknowledges that it is obtaining only a limited license right to the Software and Third Party Code and that irrespective of any use of the words purchase, sale or like terms hereunder no ownership rights are being conveyed to Customer under this Agreement or otherwise.
          </p>
        </div>

        <div className="privacy-lst">
          <h4>Access.</h4>
          <p><b>5.1</b> Customer shall designate one or more Administrators. Administrators shall be responsible for managing access by Authorized Users, including adding or removing them, and controlling different permission levels.</p>
          <p><b>5.2</b> Only Authorized Users are permitted to access the Software. Authorized Users are required to provide their full legal name, a valid email address, and any other information reasonably requested by the Service.</p>
          <p><b>5.3</b> Each Authorized User will be provided with a unique identifier to access and use the Service (“Username”). The Username shall only be used by the Authorized User to whom it is assigned, and shall not be shared with, or used by any other person, including other Authorized Users. Authorized User is solely responsible for the safety of their login credentials.</p>
          <p><b>5.4</b> Administrators are responsible for all use of the Software by Authorized Users on the list of active Authorized Users associated with their subscription to the Software.</p>
          <p><b>5.5</b> Invoice HUB reserves the right at any time, and from time to time, to modify or discontinue, temporarily or permanently, any feature associated with the Software, with or without notice, except that Invoice HUB shall provide Customer with 10-days’ notice of any modification that materially reduces the functionality of the Software. Continued use of the Software following any modification constitutes Customer’s acceptance of the modification.</p>
          <p><b>5.6</b> Invoice HUB reserves the right to temporarily suspend access to the Software for operational purposes, including, but not limited to, maintenance, repairs or installation of upgrades, and will endeavor to provide no less than two business days’ notice prior to any such suspension. Further, Invoice HUB shall endeavor to confine planned operational suspensions with a best effort to minimize disruption to the Subscriber, but reserves the ability to temporarily suspend operations without notice at any time to complete necessary repairs.</p>
        </div>

        <div className="privacy-lst">
          <h4>Customer Data.</h4>
          <p><b>6.1</b> Customer owns all right, title and interest in the Customer Data. Customer hereby grants to Invoice HUB, a non-exclusive, non-transferable (except as set forth in Section 12 below), non-sublicensable right and license to use, copy, transmit, modify and display the Customer Data solely for purposes of performing Invoice HUB’s obligations under the Agreement in accordance with the terms of the Agreement. Such rights shall include permission for Invoice HUB to generate and publish aggregate, anonymized reports on system usage and Content trends and type.</p>
          <p><b>6.2</b> Customer Data is backed up for 7 days only. Invoice HUB can help retrieve any customer content generated within 7 days prior to the request date, but not before that.</p>
        </div>

        <div className="privacy-lst">
          <h4>Confidentiality</h4>
          <p>
            Customer will treat the Software, documentation, or technical information and other materials distributed with the Software by Invoice HUB as confidential information ("Confidential Information"), and handle it with the same degree of care to prevent its unauthorized disclosure, that Customer accords to its own confidential information, but in no event with less than reasonable care. Customer's obligations of confidentiality under this Section shall terminate to the extent that Customer can document that the Confidential Information was in the public domain at or prior to the time it was communicated to Customer by Invoice HUB through no fault of Customer. Customer may also disclose the Confidential Information in response to a valid order by a court or other governmental body, when otherwise required by law, or when necessary to establish the rights of either party under this Agreement, provided Customer gives Invoice HUB advance written notice thereof. Customer acknowledges that disclosure of Confidential Information would cause substantial harm for which damages alone would not be a sufficient remedy, and therefore that upon any such disclosure by the Customer, Invoice HUB shall be entitled to appropriate equitable relief in addition to whatever other remedies it might have at law.
          </p>
        </div>

        <div className="privacy-lst">
          <h4>Warranty Disclaimer</h4>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, INVOICE HUB PROVIDES THE SOFTWARE AND ANY ASSOCIATED DOCUMENTS AND/OR SERVICES, AS-IS, WITH ALL FAULTS, WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS, IMPLIED, WHETHER BY STATUTE, COMMON LAW, CUSTOM, USAGE, OR OTHERWISE AS TO ANY MATTER, INCLUDING BUT NOT LIMITED TO PERFORMANCE, SECURITY, INTEGRATION, MERCHANTABILITY, QUIET ENJOYMENT, SATISFACTORY QUALITY, AND FITNESS FOR ANY PARTICULAR PURPOSE, COMPLETENESS, AND/OR ACCURACY. INVOICE HUB DOES NOT WARRANT THAT THE SOFTWARE AND ANY ASSOCIATED DOCUMENT AND/OR SERVICES, WILL BE ERROR-FREE OR THAT IT WILL MEET CUSTOMER'S REQUIREMENTS OR THAT THE OPERATION OF THE SOFTWARE WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE, OR THAT ERRORS IN THE SOFTWARE OR NONCONFORMITY TO ITS DOCUMENTATION CAN OR WILL BE CORRECTED.
          </p>
        </div>

        <div className="privacy-lst">
          <h4>LIMITED LIABILITY.</h4>
          <p>
            CUSTOMER AGREES THAT THE LIABILITY OF INVOICE HUB ARISING OUT OF ANY CLAIM IN ANY WAY CONNECTED WITH THE SERVICE WILL NOT EXCEED THE TOTAL AMOUNT YOU HAVE PAID FOR THE SERVICE PURSUANT TO THE AGREEMENT WITHIN THE SIX MONTH PERIOD BEFORE THE DATE THE CLAIM AROSE. CUSTOMER FURTHER AGREES THAT, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, INVOICE HUB WILL NOT BE LIABLE TO CUSTOMER FOR ANY LOSS, DAMAGES, CLAIMS, OR COSTS WHATSOEVER INCLUDING ANY CONSEQUENTIAL, INDIRECT OR INCIDENTAL DAMAGES, ANY LOST PROFITS OR LOST DATA, ANY DAMAGES RESULTING FROM BUSINESS INTERRUPTION, PERSONAL INJURY OR FAILURE TO MEET ANY DUTY OF CARE, OR CLAIMS BY A THIRD PARTY, EVEN IF A INVOICE HUB REPRESENTATIVE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH LOSS, DAMAGES, CLAIMS, OR COSTS. THIS LIMITATION WILL APPLY EVEN IN THE EVENT OF A FUNDAMENTAL OR MATERIAL BREACH OF THIS AGREEMENT.
          </p>
        </div>

        <div className="privacy-lst">
          <h4>Indemnification.</h4>
          <p>
            <strong>a.</strong> Indemnification by Customer. Customer shall defend Invoice HUB from and against all third party claims, arising from or relating to (i) any breach by Customer, its Sublicensees, or Authorized Users, of this Agreement, and (ii) Customers' use of the Software, and Customer shall indemnify and hold Invoice HUB harmless from and against any damages and costs awarded against Invoice HUB or agreed in settlement by Customer (including reasonable attorneys’ fees) resulting from such claims, provided that Customer shall have received from Invoice HUB: (i) prompt written notice of such claim; (ii) the exclusive right to control and direct the investigation, defense, and settlement (if applicable) of such claim; and (iii) all reasonably necessary cooperation.
          </p>
          <p>
            <strong>b.</strong> Indemnification by Invoice HUB. Invoice HUB shall defend Customer from and against any claim by a third party alleging that the Software when used as authorized under this Agreement infringes a U.S. patent, U.S. copyright, or U.S. trademark, and indemnify and hold Customer harmless from and against any damages and costs awarded against Customer or agreed in settlement by Invoice HUB (including reasonable attorneys’ fees) resulting from such claims, provided that Invoice HUB shall have received from Customer: (i) reasonable written notice of such claim; (ii) the exclusive right to control and direct the investigation, defense, and settlement (if applicable) of such claim; and (iii) all reasonably necessary cooperation from Customer.
          </p>
        </div>

        <div className="privacy-lst">
          <h4>Term and Termination.</h4>
          <p><b>11.1</b> This Agreement shall remain in effect for the subscription period chosen by Customer in the Offering Document, and renew automatically if Customer opts to renew such subscription.</p>
          <p><b>11.2</b> Either party may terminate this Agreement: (i) non-payment by Customer of any delinquent amounts hereunder within 10 days of written notice; (ii) immediately upon breach of Sections 3 and 7; (iii) if the other party has committed any other material breach of obligations and has failed to cure such breach within 30 days of written notice; or (iv) upon the institution of bankruptcy or state law insolvency against the other party.</p>
        </div>

        <div className="privacy-lst">
          <h4>Miscellaneous</h4>
          <p><strong>Force Majeure.</strong> Neither party shall be liable to the other for any delay or failure to perform any obligation under this Agreement (except for a failure to pay fees) if the delay or failure is due to unforeseen events, which occur after the signing of this Agreement and which are beyond the reasonable control of the parties, such as strikes, blockade, war, terrorism, riots, natural disasters, or refusal of license by the government.</p>
          <p><strong>Severability.</strong> If any provision of this Agreement shall be adjudged by any court of competent jurisdiction to be unenforceable or invalid, that provision shall be limited to the minimum extent necessary so that this Agreement shall otherwise remain in effect.</p>
          <p><strong>Applicable Law; Venue.</strong> Excluding conflict of laws rules, this Agreement shall be governed by and construed under the laws of the State of Washington, U.S. All disputes arising out of or in relation to this Agreement shall be submitted to the exclusive jurisdiction of the courts of King County, Washington or the federal courts in Washington State.</p>
        </div>

        <div className="privacy-lst">
          <p className="mt-2"><strong>Effective Date:</strong> August 1st, 2025</p>
        </div>
      </div>
    </div>
  );
}
