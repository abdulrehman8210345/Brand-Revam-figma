import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="fir-col">
        <div className="container">
          <div className="content">
            <div>
              <h1>Sezane</h1>
              <h4>Chlo Shirt, Blue Powder</h4>

              <p>
                5{"'"}5-5{";"}6, Size 10
              </p>
            </div>

            <div>
              <h1 style={{ textAlign: "end" }}>$150</h1>
              <p>New Without Tags</p>
            </div>
          </div>
          {/* image div */}
          <div className="image-div">
            {/* first col  */}
            <div className="first-col">
              <img
                src="https://s3-alpha-sig.figma.com/img/26cb/e154/3ba6518a30f03d666595a892fce715ad?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aYfmzv8QVdjh73jTKc6rjyElsw56BdkSRMLAV17DeDlVTvoGXfUllSgYxlBXZ1YK1jiTGfxrduKINRYAkqZFuQ-WtiH~JibHc~A~uQBXSs~gqFrLRGho74FRWf12GFsjj5OafiKdBDwbGtTRFJgpRB1mZeCoynOdUsW50v4Y8Oqn~tKs95PRVmlG9W1OkOiF9zJCxO3~FJsgie21LPFKY-qnDuNrHk6DZTCHonHoObMCb3pMI8IXOKfwBT8Op~eSuYdGBXc7jC7gFU2gFkqex7L3N3s9JvVCl-8uVRxXDatbcOpN3rM7KJOOpPb1Cn7b3mDHCvK0gZCgX4Mea0PsSQ__"
                alt=""
              />
            </div>

            {/* second col  */}
            <div className="second-col">
              <div>
                <img
                  className="first-img"
                  src="https://s3-alpha-sig.figma.com/img/26cb/e154/3ba6518a30f03d666595a892fce715ad?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aYfmzv8QVdjh73jTKc6rjyElsw56BdkSRMLAV17DeDlVTvoGXfUllSgYxlBXZ1YK1jiTGfxrduKINRYAkqZFuQ-WtiH~JibHc~A~uQBXSs~gqFrLRGho74FRWf12GFsjj5OafiKdBDwbGtTRFJgpRB1mZeCoynOdUsW50v4Y8Oqn~tKs95PRVmlG9W1OkOiF9zJCxO3~FJsgie21LPFKY-qnDuNrHk6DZTCHonHoObMCb3pMI8IXOKfwBT8Op~eSuYdGBXc7jC7gFU2gFkqex7L3N3s9JvVCl-8uVRxXDatbcOpN3rM7KJOOpPb1Cn7b3mDHCvK0gZCgX4Mea0PsSQ__"
                  alt=""
                />
              </div>

              <div>
                <img
                  className="sec-img"
                  src="https://s3-alpha-sig.figma.com/img/1802/ed8b/41a79278385c11e29883015f0f4b37cb?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VreGyqtxcnSA2BwNzJZP-cHA4MD1e62iQFHtJ2h8dTAKhgwTF2kOnNy2ew8JBWrmyX7~3p~1wYuYJa9nJVBEoKzX1EKk1v0136s4V8RJ2LPUmnPOm5NC3I8bKqRgHjjUQ4lR~mahr78Ac8lhSex1e1YjbmEQ~t8tXXaoNqOwrVZdwUW5CphHvN~g0HDemnMdUPml1IzVKS4dBitngsdU0HfVD5JO~x3ElIWK619NsdN8pRd65Yp3jJqPYLpQZXNVaUH~lx5CwLx1EcPARcVXVIaYUIFyndQ7PykvZJOBdWzUhYowWu0aoPi2T-tUR04VuifnDUN87wm4k9oioCKEcQ__"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="third-img"
                  src="https://s3-alpha-sig.figma.com/img/60f1/4305/6558d50cd6aba0303bf002ec8963c42e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f4opqMhklOGBnKzgISbByZDEW~58MGZJFDMPE-9-Kb6~iX8OjrYdLeK2iZrhOq-AYN3Sa1jLZGzczIPbqVhBBPhsdWFvDVeB4a873Yjj~CjBlRucqRrbobmToZWl6R8hzOOqP-vpKg4fiUMPpO9QAXnPdhgtu1OLiiPm5utkPEoFlq7A~DiMTikQJqc~~D3tdq5f1UtM1-Jp6c8NiZZAYJeVlZ25cfPgicWPtc00zSoZiYFjNfvPMdvmOf5mq221dlcUEZiYjjh-EMMVd3NZm7XeEVxlYYUxxQ82-Wg9ilQ97alRRwt5Cmrw2P~xjqGDZ9IbXMOLLZeZDANoOE7MkA__"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec-col">hi</div>
    </div>
  );
};

export default Home;
