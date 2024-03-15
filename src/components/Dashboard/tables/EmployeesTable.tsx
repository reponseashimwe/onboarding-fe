const EmployeesTable = () => {
  return (
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Employee name</th>
        <th>Employee Id</th>
        <th>DEpartment</th>
        <th>Designation</th>
        <th>Type</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
      <div className="w-12 rounded-full">
         <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          001
        </td>
        <td>Design</td>
        <td>
          UI/UX Design
        </td>
        <td>
            Office
        </td>
        <td>
            Parmanent
        </td>
        <td>
            edit/view/delete
        </td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
          <div className="avatar">
      <div className="w-12 rounded-full">
         <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          001
        </td>
        <td>Design</td>
        <td>
          UI/UX Design
        </td>
        <td>
            Office
        </td>
        <td>
            Permanent
        </td>
        <td>
            edit/view/delete
        </td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
          <div className="avatar">
      <div className="w-12 rounded-full">
         <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          001
        </td>
        <td>Design</td>
        <td>
          UI/UX Design
        </td>
        <td>
            Remote
        </td>
        <td>
            Permanent
        </td>
        <td>
            edit/view/delete
        </td>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
          <div className="avatar">
      <div className="w-12 rounded-full">
         <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          001
        </td>
        <td>Design</td>
        <td>
          UI/UX Design
        </td>
        <td>
            Office
        </td>
        <td>
            Permanent
        </td>
        <td>
            edit/view/delete
        </td>
      </tr>
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Employee name</th>
        <th>Employee Id</th>
        <th>DEpartment</th>
        <th>Designation</th>
        <th>Type</th>
        <th>Status</th>
        <th>Action</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
  )
}

export default EmployeesTable